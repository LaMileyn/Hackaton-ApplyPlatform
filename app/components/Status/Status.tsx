'use client';

import React, { FC } from 'react';
import { StatusProps } from './types';
import cn from 'classnames';

const Status: FC<StatusProps> = ({ className, variant = 'primary', text }) => {
  const isPrimary = variant === 'primary';
  const isSuccess = variant === 'success';
  const isWarning = variant === 'warning';
  const isDanger = variant === 'danger';

  return (
    <span
      className={cn(
        className,
        isPrimary && 'bg-primary-300',
        isWarning && 'bg-grade',
        isDanger && 'bg-secondary-500',
        isSuccess && 'bg-success',
        'px-4 py-2 text-system-100 text-xs rounded-2xl cursor-pointer'
      )}
    >
      {text}
    </span>
  );
};

export default Status;
