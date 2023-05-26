'use client';

import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import { VacanciesFilterItemProps } from './types';
import Select from '@/app/components/Select';

const VacancyFilterItem: FC<VacanciesFilterItemProps> = ({
  item,
  onChange,
  value,
}) => {
  const selected = useMemo(() => {
    return item.options.find((el) => el.value === value);
  }, [item, value]);

  return (
    <div className="mb-4">
      <Select
        selected={selected || null}
        onChange={(newVal) => onChange(item.code, newVal)}
        options={item.options}
        label={item.label}
        placeholder={item.placeholder}
      />
    </div>
  );
};

export default memo(VacancyFilterItem);
