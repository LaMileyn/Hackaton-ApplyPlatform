'use client';

import { Button } from '@/app/components';
import React, { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { ResumeHeaderProps } from './types';
import { useRouter } from 'next/navigation';
import ContentEditable from 'react-contenteditable';
import useUser from '@/app/hooks/useUser/useUser';
import { useResumeContext } from '@/app/providers/resumeFormProvider/resumeFormProvider';

const ResumeHeader: FC<ResumeHeaderProps> = () => {
  const router = useRouter();
  const user = useUser();

  const { resume, updateTitle } = useResumeContext();

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
          <div className="flex gap-7">
            <div className="w-[200px] rounded aspect-square bg-system-300" />
            <div>
              <div className="mb-3 text-primary-500 text-4xl">
                <ContentEditable
                  className="outline-none editablePlaceholder"
                  placeholder="Должность"
                  html={resume?.title || ''}
                  onChange={(e) => updateTitle?.(e.target.value)}
                />
              </div>
              <div className="mb-3 text-system-900 text-xl">
                {user?.fullName}
              </div>
            </div>
          </div>
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
