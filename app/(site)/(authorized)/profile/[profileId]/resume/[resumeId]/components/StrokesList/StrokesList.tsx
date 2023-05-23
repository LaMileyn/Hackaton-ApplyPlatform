'use client';

import React, { FC } from 'react';
import { StrokesListProps } from './types';
import StrokeItem from '../StrokeItem/StrokeItem';

const StrokesList: FC<StrokesListProps> = ({ strokes }) => {
  return (
    <ul>
      {strokes.map((stroke) => (
        <StrokeItem stroke={stroke} key={stroke.id} />
      ))}
    </ul>
  );
};

export default StrokesList;
