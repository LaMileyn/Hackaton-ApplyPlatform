'use client';

import React, { FC } from 'react';
import { FormTabsProps } from './types';
import cn from 'classnames';
import { EAuthFormTab } from '../AuthForm/types';

const FormTabs: FC<FormTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-5 justify-center mb-5">
      <div
        onClick={() => setActiveTab(EAuthFormTab.RECRUTER)}
        className={cn(
          activeTab === EAuthFormTab.RECRUTER
            ? 'text-primary-300 font-medium'
            : 'text-system-600',
          'cursor-pointer'
        )}
      >
        Я ищу сотрудника
      </div>
      <div
        onClick={() => setActiveTab(EAuthFormTab.CANDIDATE)}
        className={cn(
          activeTab === EAuthFormTab.CANDIDATE
            ? 'text-primary-300 font-medium'
            : 'text-system-600',
          'cursor-pointer'
        )}
      >
        Я ищу работу
      </div>
    </div>
  );
};

export default FormTabs;
