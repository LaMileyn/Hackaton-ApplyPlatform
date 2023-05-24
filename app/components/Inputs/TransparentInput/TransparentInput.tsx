'use client';

import React, { FC } from 'react';
import { TransparentInputProps } from './types';
import cn from 'classnames';

const TransparentInput: FC<TransparentInputProps> = ({
  onChange,
  value,
  placeholder,
  className,
}) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };
  return (
    <div>
      <input
        value={value}
        placeholder={placeholder}
        onChange={handleValueChange}
        className={cn(className, `border-0 bg-none outline-none `)}
      />
    </div>
  );
};

export default TransparentInput;
