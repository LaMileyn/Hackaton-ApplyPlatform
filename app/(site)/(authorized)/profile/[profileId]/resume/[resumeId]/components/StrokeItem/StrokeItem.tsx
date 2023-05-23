'use client';

import React, { FC } from 'react';
import { StrokeItemProps } from './types';

const StrokeItem: FC<StrokeItemProps> = ({ stroke }) => {
  return (
    <li className="mb-4 flex items-start gap-6">
      <div>
        <p>с июля 2021 - по октябрь 2022</p>
      </div>
      <div>
        <div>{stroke.title}</div>
        <div>{stroke.subtitle}</div>
        <div>{stroke.description}</div>
      </div>
    </li>
  );
};

export default StrokeItem;
