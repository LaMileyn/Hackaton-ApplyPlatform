'use client';

import React, { FC } from 'react';
import { HeadingProps } from './types';

const Heading: FC<HeadingProps> = ({ title, addonAfter }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="mb-4 text-system-900 text-3xl">{title}</h2>
      {addonAfter}
    </div>
  );
};

export default Heading;
