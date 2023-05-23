'use client';

import React, { FC } from 'react';
import { HeadingProps } from './types';

const Heading: FC<HeadingProps> = ({ title, addonAfter }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-system-900 text-3xl">{title}</h2>
      {addonAfter}
    </div>
  );
};

export default Heading;
