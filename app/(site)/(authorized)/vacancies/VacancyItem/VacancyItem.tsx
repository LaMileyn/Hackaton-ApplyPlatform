'use client';

import React, { FC } from 'react';
import { VacancyItemProps } from './types';
import { Status } from '@/app/components';

const VacancyItem: FC<VacancyItemProps> = ({ vacancy, isCandidate }) => {
  const { company, description, title } = vacancy;
  return (
    <li className="p-4 bg-system-100 mb-3 rounded">
      <div className="mb-3 text-primary-500 text-xl">{title}</div>
      <div className="mb-5 text-base text-system-900">{company}</div>
      <div className="mb-5 text-base text-system-600">{description}</div>
      {/*  extra block */}
      {!isCandidate && <Status text={vacancy.status || 'Найти'} />}
    </li>
  );
};

export default VacancyItem;
