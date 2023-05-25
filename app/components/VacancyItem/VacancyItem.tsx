'use client';

import React, { FC } from 'react';
import { VacancyItemProps } from './types';
import { Status } from '@/app/components';

const VacancyItem: FC<VacancyItemProps> = ({
  isCandidate,
  status,
  company,
  description,
  title,
  vacancieType,
  onClick,
}) => {
  return (
    <li
      className="p-4 bg-system-100 mb-3 rounded cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="mb-3 text-primary-500 text-xl">{title}</div>
        {isCandidate && vacancieType === 'apply' && (
          <Status text={status || ''} variant="success" />
        )}
      </div>

      <div className="mb-5 text-base text-system-900 font-medium">
        {company}
      </div>
      <div className="mb-5 text-base text-system-600">{description}</div>
      {!isCandidate && vacancieType === 'vacancy' && (
        <Status text={status || ''} />
      )}
    </li>
  );
};

export default VacancyItem;
