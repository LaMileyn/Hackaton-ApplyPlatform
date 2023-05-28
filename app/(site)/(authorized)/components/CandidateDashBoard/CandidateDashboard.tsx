'use client';

import { Button, Heading, TextLink } from '@/app/components';
import React, { FC } from 'react';
import VacanciesList from './components/VacanciesList';
import { APPLIES_ROUTE, VACANCIES_ROUTE } from '@/app/const/appRoutes';
import AppliesList from './components/AppliesList/AppliesList';

const CandidateDashboard: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <Heading
          title="Вакансии"
          addonAfter={<TextLink text="Все >" href={VACANCIES_ROUTE} />}
        />
        <VacanciesList />
      </div>
      <div>
        <Heading
          title="Отклики"
          addonAfter={<TextLink text="Все >" href={APPLIES_ROUTE} />}
        />
        <AppliesList />
      </div>
    </div>
  );
};

export default CandidateDashboard;
