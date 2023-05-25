'use client';

import React, { FC, useCallback, useMemo, useState } from 'react';
import { VacanciesFilterItemProps } from './types';
import Select from '@/app/components/Select';

const VacancyFilterItem: FC<VacanciesFilterItemProps> = ({ item }) => {
  const [value, setValue] = useState<string | number>();

  const selected = useMemo(() => {
    return item.options.find((el) => el.value === value);
  }, [item, value]);

  const handleMonthChange = useCallback((value: string | number) => {
    setValue(value);
  }, []);

  console.log();

  return (
    <div className="mb-4">
      <Select
        selected={selected || null}
        onChange={handleMonthChange}
        options={item.options}
        label={item.label}
        placeholder={item.placeholder}
      />
    </div>
  );
};

export default VacancyFilterItem;
