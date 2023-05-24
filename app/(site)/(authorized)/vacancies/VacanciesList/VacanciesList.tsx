'use client';

import React, { FC } from 'react';
import { VacanciesListProps } from './types';
import VacancyItem from '../VacancyItem/VacancyItem';

const VacanciesList: FC<VacanciesListProps> = ({ vacancies }) => {
  return (
    <ul className="flex-1">
      {vacancies.map((vacancy) => (
        <VacancyItem key={vacancy.id} vacancy={vacancy} />
      ))}
    </ul>
  );
};

export default VacanciesList;
