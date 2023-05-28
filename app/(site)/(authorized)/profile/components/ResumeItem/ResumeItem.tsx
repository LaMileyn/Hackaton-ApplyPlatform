'use client';

import React, { FC } from 'react';
import { ResumeItemProps } from './types';
import { useRouter } from 'next/navigation';
import { RESUMES_ROUTE } from '@/app/const/appRoutes';

const ResumeItem: FC<ResumeItemProps> = ({ resume }) => {
  const router = useRouter();
  return (
    <div
      className="p-4 min-h-[200px] rounded 
      bg-system-100 font-medium text-2xl w-[180px] cursor-pointer transition hover:scale-105 shadow-sm text-system-600"
      onClick={() => router.push(RESUMES_ROUTE + '/' + resume.ID)}
    >
      <div className="">{resume.title}</div>
    </div>
  );
};

export default ResumeItem;
