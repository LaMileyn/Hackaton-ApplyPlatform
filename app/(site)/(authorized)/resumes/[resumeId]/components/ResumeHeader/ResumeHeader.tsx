'use client';

import ProfileHeader from '@/app/(site)/(authorized)/profile/components/ProfileHeader/ProfileHeader';
import { Button } from '@/app/components';
import React, { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { ResumeHeaderProps } from './types';
import { useRouter } from 'next/navigation';

const ResumeHeader: FC<ResumeHeaderProps> = ({ isOwner }) => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-4">
        <Button
          onClick={() => router.back()}
          iconLeft={<IoIosArrowBack />}
          variant="transparent"
        >
          Назад
        </Button>
      </div>
      <div className="mb-7 flex items-start">
        <div className="flex-grow">
          <ProfileHeader />
        </div>
        {isOwner ? (
          <div className="flex gap-2">
            <Button variant="secondary">Удалить</Button>
            <Button>Сохранить</Button>
          </div>
        ) : (
          <Button>Пригласить</Button>
        )}
      </div>
    </div>
  );
};

export default ResumeHeader;
