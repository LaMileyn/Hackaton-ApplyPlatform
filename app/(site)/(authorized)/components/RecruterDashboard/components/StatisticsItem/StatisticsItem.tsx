'use client';

import React, { FC } from 'react';
import { StatisticsItemProps } from './types';

const StatisticsItem: FC<StatisticsItemProps> = ({ count, text }) => {
  return (
    <div className="p-2 rounded bg-system-100">
      <div className="mb-2 text-3xl text-system-900">{count}</div>
      <div className="text-sm text-system-600">{text}</div>
    </div>
  );
};

export default StatisticsItem;
