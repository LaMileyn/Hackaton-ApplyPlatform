'use client';

import { Button, Heading, SidebarInfo, TextLink } from '@/app/components';
import React, { FC } from 'react';
import { ApplyInfoProps } from './types';
import { VscChromeClose } from 'react-icons/vsc';
import Link from 'next/link';
import StagesList from '../StagesList/StagesList';

const ApplyInfo: FC<ApplyInfoProps> = ({ isOpen, setIsOpen }) => {
  const headingRight = (
    <div className="flex gap-3">
      <Button variant="secondary">Отказ</Button>
      <Button>Cогласие</Button>
    </div>
  );
  return (
    <SidebarInfo isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl text-primary-500">
            Middle IOS разработчик
          </div>
          <VscChromeClose
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
            size={30}
            color="grey"
          />
        </div>
        <div className="text-base font-medium text-system-900 mb-16">
          Совкомбанк
        </div>
        <div className="flex gap-3 items-center mb-10">
          <TextLink href={'/'} text="Открыть вакансию" hovered />
          <TextLink href={'/'} text="Связаться с рекрутером" hovered />
        </div>
        <Heading title="Этапы собеседования" addonAfter={headingRight} />
        <StagesList />
      </div>
    </SidebarInfo>
  );
};

export default ApplyInfo;
