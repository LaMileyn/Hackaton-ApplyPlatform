'use client';

import React, { FC } from 'react';
import { ResumesListProps } from './types';
import ResumeItem from '../ResumeItem/ResumeItem';
import { useRouter } from 'next/navigation';
import { RESUMES_ROUTE } from '@/app/const/appRoutes';
import { useQuery } from '@tanstack/react-query';
import { resumesService } from '@/app/services';
import { GrAdd } from 'react-icons/gr';

const ResumesList: FC<ResumesListProps> = () => {
  const { data: resumes } = useQuery(['resumes'], () =>
    resumesService.getAllResumes()
  );
  const router = useRouter();
  return (
    <div className="flex wrap gap-2 items-stretch mt-4">
      {resumes?.map((resume) => (
        <ResumeItem key={resume.ID} resume={resume} />
      ))}
      <div
        onClick={() => router.push(RESUMES_ROUTE + '/' + 'create')}
        className="p-3 cursor-pointer min-h-[200px] rounded bg-system-100 
        flex items-center justify-center w-[180px] flex-col font-medium text-center"
      >
        <GrAdd size={45} color="#3557C4" />
        <div className="mt-2 text-system-900">Добавить резюме</div>
      </div>
    </div>
  );
};

export default ResumesList;
