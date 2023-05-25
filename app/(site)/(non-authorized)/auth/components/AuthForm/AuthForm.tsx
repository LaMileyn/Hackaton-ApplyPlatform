'use client';

import React, { FC, useState } from 'react';
import FormTabs from '../FormTabs/FormTabs';
import { Button } from '@/app/components';
import { EAuthForm, EAuthFormTab } from './types';
import FormInput from '../FormInput/FormInput';
import FormCheckBox from '../FormCheckBox/FormCheckBox';

const AuthForm: FC = () => {
  const [formType, setFormType] = useState<EAuthForm>(EAuthForm.LOGIN);
  const [activeTab, setActiveTab] = useState<EAuthFormTab>(
    EAuthFormTab.CANDIDATE
  );

  const handleChangeFormType = () => {
    setFormType((prevType) =>
      prevType === EAuthForm.LOGIN ? EAuthForm.REGISTRATION : EAuthForm.LOGIN
    );
  };

  return (
    <div className="mt-7 px-4">
      <FormTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <form>
        <FormInput type="email" placeholder="Электронная почта" />
        <FormInput type="password" placeholder="Пароль" />
        <FormInput type="password" placeholder="Роль" />
        <FormCheckBox />
        <Button className="mb-3 mt-6" fullWidth>
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
