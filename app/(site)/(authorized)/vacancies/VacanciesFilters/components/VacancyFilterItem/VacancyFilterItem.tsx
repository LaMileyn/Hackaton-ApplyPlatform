'use client';

import React, { FC, useCallback, useMemo, useState } from 'react';
import { VacanciesFilterItemProps } from './types';
import Select from '@/app/components/Select';

const VacancyFilterItem: FC<VacanciesFilterItemProps> = ({ item }) => {
  const [value, setValue] = useState<string | number>();

  const selected = useMemo(() => {
    return item.options.find((el) => el.value === value);
  }, []);

  const handleMonthChange = useCallback((value: string | number) => {
    setValue(value);
  }, []);

  return (
    <div className="mb-4">
      <div className="text-system-900 mb-1">{item.label}</div>
      <Select
        selected={selected || null}
        onChange={handleMonthChange}
        options={item.options}
        placeholder={item.placeholder}
      />
    </div>
  );
};

export default VacancyFilterItem;
