'use client';

import React, { FC } from 'react';
import { VacanciesListProps } from './types';
import { Card } from '@/app/components';

const VacanciesList: FC<VacanciesListProps> = ({ vacancies }) => {
  return (
    <div className="flex-1">
      {vacancies.map((vacancy) => (
        <Card
          key={vacancy.id}
          company={vacancy.company}
          title={vacancy.title}
          description={vacancy.description}
          isCandidate={false}
          vacancyStatus={vacancy.status}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};

export default VacanciesList;
