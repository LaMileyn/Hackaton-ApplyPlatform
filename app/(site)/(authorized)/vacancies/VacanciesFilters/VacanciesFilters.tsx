'use client';

import React, { FC } from 'react';
import { filtersData } from './store';
import VacancyFilterItem from './components/VacancyFilterItem';
import Select from '@/app/components/Select/Select';

const VacanciesFilters: FC = () => {
  return (
    <div className="basis-72 bg-system-300 rounded p-4">
      {filtersData.map((filterItem, i) => {
        return <VacancyFilterItem key={i} item={filterItem} />;
      })}
    </div>
  );
};

export default VacanciesFilters;
