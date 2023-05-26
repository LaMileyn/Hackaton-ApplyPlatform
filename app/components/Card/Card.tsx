'use client';

import React, { FC } from 'react';
import { CardProps } from './types';
import Status from '../Status/Status';
import { applieStatic, vacancyStatic } from './store';

const Card: FC<CardProps> = ({
  company,
  isCandidate,
  title,
  applyStatus,
  description,
  mode = 'normal',
  onClick,
  vacancyStatus,
}) => {
  return (
    <div
      className="p-4 bg-system-100 mb-3 rounded cursor-pointer"
      onClick={onClick ?? undefined}
    >
      <div className="flex items-center justify-between">
        <div className="mb-3 text-primary-500 text-xl">{title}</div>
        {isCandidate && applyStatus && mode === 'normal' && (
          <Status
            text={applieStatic[applyStatus].text}
            variant={applieStatic[applyStatus].color}
          />
        )}
      </div>

      <div className="mb-5 text-base text-system-900 font-medium">
        {company}
      </div>
      <div className="mb-5 text-base text-system-600">{description}</div>
      {!isCandidate && vacancyStatus && (
        <Status
          text={vacancyStatic[vacancyStatus].text}
          variant={vacancyStatic[vacancyStatus].color}
        />
      )}
    </div>
  );
};

export default Card;
