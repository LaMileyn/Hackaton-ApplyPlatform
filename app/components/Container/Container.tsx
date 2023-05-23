'use client';

import { ContainerProps } from './types';
import React, { FC } from 'react';

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className={`
    max-w-[2520px]
    mx-auto
    p-7
  `}
    >
      {children}
    </div>
  );
};

export default Container;
