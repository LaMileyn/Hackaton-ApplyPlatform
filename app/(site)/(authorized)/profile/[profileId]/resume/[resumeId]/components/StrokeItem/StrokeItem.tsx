'use client';

import React, { FC } from 'react';
import { StrokeItemProps } from './types';
import { RiDeleteBin5Line } from 'react-icons/ri';

const StrokeItem: FC<StrokeItemProps> = ({ blockId, stroke, removeStroke }) => {
  return (
    <li className="mb-4 flex items-start gap-6 justify-between">
      <div className="flex items-start gap-6">
        <div>
          <p>C июля 2021 - по октябрь 2022</p>
        </div>
        <div>
          <div>{stroke.title}</div>
          <div>{stroke.subtitle}</div>
          <div>{stroke.description}</div>
        </div>
      </div>
      <RiDeleteBin5Line
        onClick={() => removeStroke(blockId, stroke.id)}
        className="cursor-pointer"
        color="gray"
        size={24}
      />
    </li>
  );
};

export default StrokeItem;
