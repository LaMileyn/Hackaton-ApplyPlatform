'use client';

import React, { FC, useCallback, useEffect, useState } from 'react';
import { filtersData } from './store';
import VacancyFilterItem from './components/VacancyFilterItem';
import { Button } from '@/app/components';
import { VacancyCode } from './types';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const initialFilters = {
  city: '',
  company: '',
  experience: '',
  spec: '',
  workType: '',
};
const VacanciesFilters: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const [filters, setFilters] = useState<Record<VacancyCode, string>>({
    city: searchParams.get('city') || '',
    company: searchParams.get('company') || '',
    experience: searchParams.get('experience') || '',
    spec: searchParams.get('spec') || '',
    workType: searchParams.get('workType') || '',
  });

  const handleChangeValue = useCallback((code: VacancyCode, value: string) => {
    setFilters((prev) => {
      return { ...prev, [code]: value };
    });
  }, []);

  const dropFilters = () => {
    setFilters(initialFilters);
    router.push(pathname);
  };

  useEffect(() => {
    console.log(searchParams.toString());
  }, [searchParams]);

  const createQueryString = () => {
    const params = new URLSearchParams();
    for (const param in filters) {
      // @ts-ignore
      const value = filters[param];
      if (value) {
        params.append(param, value);
      }
    }
    return params;
  };

  const applyFilters = () => {
    router.push(pathname + '?' + createQueryString());
  };

  return (
    <div className="basis-72 bg-system-300 rounded p-4">
      {filtersData.map((filterItem, i) => {
        return (
          <VacancyFilterItem
            key={i}
            item={filterItem}
            value={filters[filterItem.code]}
            onChange={handleChangeValue}
          />
        );
      })}
      <Button className="py-4 mb-2" onClick={applyFilters} fullWidth>
        Применить фильтры
      </Button>
      <Button
        className="py-4"
        variant="secondary"
        fullWidth
        onClick={dropFilters}
      >
        Сбросить фильтры
      </Button>
    </div>
  );
};

export default VacanciesFilters;
