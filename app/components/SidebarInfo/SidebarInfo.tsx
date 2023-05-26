'use client';

import React, { FC } from 'react';
import { SidebarInfoProps } from './types';
import cn from 'classnames';
import { useClickOutside } from '@/app/hooks';
import { AnimatePresence, motion } from 'framer-motion';

const SidebarInfo: FC<SidebarInfoProps> = ({ isOpen, setIsOpen, children }) => {
  const ref = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed z-50 w-full inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={cn('absolute inset-0 bg-system-900 opacity-30')} />
          <motion.div
            ref={ref}
            className="transition relative ml-auto h-full md:w-[700px] z-50 bg-system-200 shadow-sm"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0' }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ ease: 'linear' }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidebarInfo;
