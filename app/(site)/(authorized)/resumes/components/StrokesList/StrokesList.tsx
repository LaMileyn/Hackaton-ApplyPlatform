'use client';

import React, { FC } from 'react';
import { StrokesListProps } from './types';
import StrokeItem from '../StrokeItem/StrokeItem';

const StrokesList: FC<StrokesListProps> = ({ strokes, blockId }) => {
  return (
    <ul>
      {strokes.map((stroke) => (
        <StrokeItem stroke={stroke} blockId={blockId} key={stroke.ID} />
      ))}
    </ul>
  );
};

export default StrokesList;
