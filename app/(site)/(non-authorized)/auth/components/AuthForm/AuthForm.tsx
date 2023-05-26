'use client';

import React, { FC, useState, useMemo, useEffect } from 'react';
import FormTabs from '../FormTabs/FormTabs';
import { Button, Select } from '@/app/components';
import { EAuthForm, EAuthFormTab } from './types';
import FormInput from '../FormInput/FormInput';
import FormCheckBox from '../FormCheckBox/FormCheckBox';
import { selectOptions } from './store';
import { EUserRole } from '@/app/types/users';
import { useInput } from '@/app/hooks';
import useSignIn from '../hooks/useSignIn';
import useSignUp from '../hooks/useSignUp';

const AuthForm: FC = () => {
  const [role, setRole] = useState<EUserRole>(EUserRole.CANDIDATE);

  const email = useInput();
  const password = useInput();

  const [formType, setFormType] = useState<EAuthForm>(EAuthForm.LOGIN);
  const [activeTab, setActiveTab] = useState<EAuthFormTab>(
    EAuthFormTab.CANDIDATE
  );

  useEffect(() => {
    if (activeTab === EAuthFormTab.CANDIDATE) {
      setRole(EUserRole.CANDIDATE);
    } else {
      setRole(EUserRole.RECRUTER);
    }
  }, [activeTab]);
  const selectedRole = useMemo(() => {
    return selectOptions.find((opt) => opt.value === role);
  }, [selectOptions, role]);

  const signIn = useSignIn(email.value, password.value);
  const signUp = useSignUp(email.value, password.value, role);

  const handleChangeFormType = () => {
    setFormType((prevType) =>
      prevType === EAuthForm.LOGIN ? EAuthForm.REGISTRATION : EAuthForm.LOGIN
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formType === EAuthForm.LOGIN) {
      signIn();
    } else {
      signUp();
    }
  };

  return (
    <div className="mt-7 px-4">
      <FormTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <form onSubmit={handleSubmit}>
        <FormInput type="email" {...email} placeholder="Электронная почта" />
        <FormInput
          minLength={5}
          type="password"
          {...password}
          placeholder="Пароль"
        />
        {activeTab === EAuthFormTab.RECRUTER && (
          <Select
            options={selectOptions}
            selected={selectedRole || null}
            onChange={(value: EUserRole) => setRole(value)}
            placeholder="Выберите роль"
          />
        )}
        <FormCheckBox />
        <Button className="mb-3 mt-6" fullWidth type="submit">
          {formType === EAuthForm.LOGIN ? 'Войти' : 'Зарегистрироваться'}
        </Button>
        <Button variant="transparent" fullWidth onClick={handleChangeFormType}>
          {formType === EAuthForm.LOGIN ? 'Зарегистрироваться' : 'Войти'}
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
