'use client';

import React, { FC } from 'react';
import { SidebarInfoProps } from './types';
import cn from 'classnames';
import { useClickOutside, useLockedBody } from '@/app/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { VscChromeClose } from 'react-icons/vsc';
import TextLink from '../TextLink/TextLink';
import Heading from '../Heading/Heading';
import useUser from '@/app/hooks/useUser/useUser';
import Button from '../Button/Button';
import { EUserRole } from '@/app/types/users';
import StagesList from './components/StagesList/StagesList';
import { useQuery } from '@tanstack/react-query';
import { appliesService } from '@/app/services';
import { RESUMES_ROUTE, VACANCIES_ROUTE } from '@/app/const/appRoutes';

const SidebarInfo: FC<SidebarInfoProps> = ({
  isOpen,
  setIsOpen,
  fromForm,
  id,
}) => {
  const { data } = useQuery(['apply', id], () =>
    appliesService.getApplyInfo(id)
  );
  const ref = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const headingRight = (
    <div className="flex gap-3">
      {fromForm ? (
        <>
          <Button variant="secondary">Отказ</Button>
          <Button>Cогласие</Button>
        </>
      ) : (
        <Button variant="secondary">Отказ</Button>
      )}
    </div>
  );

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
            className="transition relative ml-auto h-full md:w-[800px] z-50 bg-system-200 shadow-sm"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0' }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ ease: 'linear' }}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-5">
                  {fromForm && (
                    <div className="w-[200px] h-[200px] bg-system-300-b rounded" />
                  )}
                  <div>
                    <div className="text-4xl text-primary-500">
                      {data?.cv?.title}
                    </div>
                    <div className="text-xl font-medium text-system-900 mt-4 mb-16">
                      {fromForm ? data?.user?.fullName : data?.vacancy.company}
                    </div>
                    {fromForm && (
                      <div className="flex gap-3 items-center mb-10 mt-6">
                        <TextLink
                          href={RESUMES_ROUTE + '/' + data?.cv.ID}
                          text="Открыть резюме"
                          hovered
                        />
                        <TextLink href={'/'} text="Связаться" hovered />
                      </div>
                    )}
                  </div>
                </div>
                <VscChromeClose
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="cursor-pointer"
                  size={30}
                  color="grey"
                />
              </div>
              {!fromForm && (
                <div className="flex gap-3 items-center mb-10 mt-6">
                  <TextLink
                    href={VACANCIES_ROUTE + '/' + data?.vacancy.ID}
                    text="Открыть вакансию"
                    hovered
                  />
                  <TextLink href={'/'} text="Связаться с рекрутером" hovered />
                </div>
              )}

              <Heading title="Этапы собеседования" addonAfter={headingRight} />
              <StagesList />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidebarInfo;
