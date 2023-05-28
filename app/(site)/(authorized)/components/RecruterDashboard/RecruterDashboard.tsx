'use client';

import { Container, Heading, TextLink } from '@/app/components';
import React, { FC } from 'react';
import VacanciesList from '../VacanciesList/VacanciesList';
import { VACANCIES_ROUTE } from '@/app/const/appRoutes';
import Statistics from './components/Statistics';

const RecruterDashboard: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Heading
          title="Вакансии"
          addonAfter={<TextLink text="Все >" href={VACANCIES_ROUTE} />}
        />
        <VacanciesList isCandidate={false} />
      </div>
      <div>
        <Heading title="Статистика за месяц" />
        <Statistics />
      </div>
    </div>
  );
};

export default RecruterDashboard;
