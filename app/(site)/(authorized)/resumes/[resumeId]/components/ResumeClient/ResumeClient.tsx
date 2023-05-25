'use client';

import React, { FC, useState } from 'react';
import ResumeHeader from '../ResumeHeader/ResumeHeader';
import ResumeBody from '../ResumeBody/ResumeBody';
import { Resume } from '@/app/types/resumes/models';
import { ResumeClientProps } from './types';

const ResumeClient: FC<ResumeClientProps> = ({ resume: initialResume }) => {
  const [resumeInfo, setResumeInfo] = useState<Resume>(initialResume);

  const isOwner = true;
  return (
    <div>
      <ResumeHeader isOwner={isOwner} />
      <ResumeBody isOwner={isOwner} blocks={resumeInfo.blocks} />
    </div>
  );
};

export default ResumeClient;
