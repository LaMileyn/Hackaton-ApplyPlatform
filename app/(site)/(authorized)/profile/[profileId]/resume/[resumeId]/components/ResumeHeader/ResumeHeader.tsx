'use client';

import ProfileHeader from '@/app/(site)/(authorized)/profile/components/ProfileHeader/ProfileHeader';
import { Button } from '@/app/components';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const ResumeHeader = () => {
  return (
    <div>
      <div className="mb-4">
        <Button iconLeft={<IoIosArrowBack />} variant="transparent">
          Назад
        </Button>
      </div>
      <div className="mb-7 flex items-start">
        <div className="flex-grow">
          <ProfileHeader />
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Удалить</Button>
          <Button>Сохранить</Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
