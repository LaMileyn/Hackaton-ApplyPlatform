'use client';

import React, { FC } from 'react';
import { ApplieInfoProps } from './types';
import cn from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import { useClickOutside } from '@/app/hooks';

const SidebarInfo: FC<ApplieInfoProps> = ({ isOpen, setIsOpen }) => {
  const ref = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (
    <div className={'fixed z-50 w-full inset-0'}>
      <div
        className={cn(
          'transition absolute inset-0 z-40 bg-system-900',
          isOpen ? 'opacity-30' : 'opacity-0'
        )}
      />
      <div
        ref={ref}
        className={cn(
          'transition relative ml-auto h-full md:w-[700px] z-50 bg-system-100 shadow-sm',
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        )}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-4xl text-primary-500">
              Middle IOS разработчик
            </div>
            <TfiClose
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
              size={24}
              color="grey"
            />
          </div>
          <div className="text-lg text-system-900">Совкомбанк</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarInfo;
