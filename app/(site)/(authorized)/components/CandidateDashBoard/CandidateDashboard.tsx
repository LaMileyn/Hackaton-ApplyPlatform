'use client';

import { Button, Heading, TextLink } from '@/app/components';
import React, { FC } from 'react';
import { APPLIES_ROUTE, VACANCIES_ROUTE } from '@/app/const/appRoutes';
import AppliesList from './components/AppliesList/AppliesList';
import VacanciesList from '../VacanciesList/VacanciesList';

const CandidateDashboard: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <Heading
          title="Вакансии"
          addonAfter={<TextLink text="Все >" href={VACANCIES_ROUTE} />}
        />
        <VacanciesList isCandidate={true} />
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
