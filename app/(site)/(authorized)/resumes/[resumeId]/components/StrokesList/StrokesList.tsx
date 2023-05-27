'use client';

import React, { FC } from 'react';
import { StrokesListProps } from './types';
import StrokeItem from '../StrokeItem/StrokeItem';

const StrokesList: FC<StrokesListProps> = ({
  strokes,
  blockId,
  removeStroke,
}) => {
  return (
    <ul>
      {strokes.map((stroke) => (
        <StrokeItem
          stroke={stroke}
          blockId={blockId}
          key={stroke.ID}
          removeStroke={removeStroke}
        />
      ))}
    </ul>
  );
};

export default StrokesList;
