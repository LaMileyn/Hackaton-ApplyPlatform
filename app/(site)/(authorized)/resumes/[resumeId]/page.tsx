'use client';

import { ClientOnly } from '@/app/components';
import ResumeTemplate from '../components/ResumeTemplate/ResumeTemplate';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import resumersService from '@/app/services/resumes/resumersService';
import { useResumeContext } from '@/app/providers/resumeFormProvider/resumeFormProvider';

const ResumePage = () => {
  const { setResumeData } = useResumeContext();
  const { resumeId } = useParams();
  useQuery(['resume', resumeId], () => resumersService.getResume(+resumeId), {
    onSuccess: (data) => {
      setResumeData?.(data);
    },
  });

  return (
    <ClientOnly>
      <ResumeTemplate />
    </ClientOnly>
  );
};

export default ResumePage;
