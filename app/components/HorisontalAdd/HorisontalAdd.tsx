'use client';

import React, { FC } from 'react';
import { HorisontalAddProps } from './types';
import { IoMdAdd } from 'react-icons/io';
import Button from '../Button/Button';

const HorisontalAdd: FC<HorisontalAddProps> = ({ btnText, onClick }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t-2 border-system-300-b" />
      </div>
      <div className="relative flex justify-center">
        <div className="px-7 bg-system-200">
          <Button variant="secondary" iconLeft={<IoMdAdd />} onClick={onClick}>
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HorisontalAdd;
