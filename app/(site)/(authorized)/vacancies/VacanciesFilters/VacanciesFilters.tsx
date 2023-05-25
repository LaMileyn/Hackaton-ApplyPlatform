'use client';

import React, { FC } from 'react';
import { filtersData } from './store';
import VacancyFilterItem from './components/VacancyFilterItem';
import { Button } from '@/app/components';

const VacanciesFilters: FC = () => {
  return (
    <div className="basis-72 bg-system-300 rounded p-4">
      {filtersData.map((filterItem, i) => {
        return <VacancyFilterItem key={i} item={filterItem} />;
      })}
      <Button className="py-5" onClick={() => {}} variant="secondary" fullWidth>
        Сбросить фильтры
      </Button>
    </div>
  );
};

export default VacanciesFilters;
