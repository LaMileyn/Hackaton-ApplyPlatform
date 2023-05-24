'use client';

import React, { FC } from 'react';
import { ResumesListProps } from './types';

const ResumesList: FC<ResumesListProps> = ({ resumes }) => {
  return (
    <ul>
      {resumes.map((resume) => (
        <div></div>
      ))}
    </ul>
  );
};

export default ResumesList;
