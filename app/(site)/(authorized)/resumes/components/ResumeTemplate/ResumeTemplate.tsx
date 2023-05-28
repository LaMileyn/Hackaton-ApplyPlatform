'use client';

import { Container } from '@/app/components';
import React, { FC, useEffect } from 'react';
import ResumeHeader from '../ResumeHeader/ResumeHeader';
import ResumeBody from '../ResumeBody/ResumeBody';
import { ResumeTemplateProps } from './types';
import { useResumeContext } from '@/app/providers/resumeFormProvider/resumeFormProvider';
import { useParams } from 'next/navigation';
import { initialResume } from './store';

const ResumeTemplate: FC<ResumeTemplateProps> = () => {
  const { setResumeData, setEditMode } = useResumeContext();
  const { resumeId } = useParams();

  useEffect(() => {
    if (!resumeId) {
      setResumeData?.(initialResume);
      setEditMode?.(true);
    }
  }, [resumeId]);

  return (
    <Container>
      <ResumeHeader />
      <ResumeBody />
    </Container>
  );
};

export default ResumeTemplate;
