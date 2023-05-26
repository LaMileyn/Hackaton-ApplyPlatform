'use client';

import { Button, Heading, TextLink } from '@/app/components';
import React, { FC } from 'react';
import VacanciesList from './components/VacanciesList';

const CandidateDashboard: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div>
        <Heading
          title="Вакансии"
          addonAfter={<TextLink text="Все >" href="/" />}
        />
        <VacanciesList />
      </div>
      <div>
        <Heading
          title="Cобеседования"
          addonAfter={<TextLink text="Все >" href="/" />}
        />
        <VacanciesList />
      </div>
      <div>
        <Heading
          title="Отклики"
          addonAfter={<TextLink text="Все >" href="/" />}
        />
        <VacanciesList />
      </div>
    </div>
  );
};

export default CandidateDashboard;
