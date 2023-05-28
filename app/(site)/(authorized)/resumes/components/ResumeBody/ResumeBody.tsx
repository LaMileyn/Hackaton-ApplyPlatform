'use client';

import { Heading } from '@/app/components';
import React, { FC } from 'react';
import BlocksList from '../BlocksList/BlocksList';
import { ResumeBodyProps } from './types';
import ContentEditable from 'react-contenteditable';
import { useResumeContext } from '@/app/providers/resumeFormProvider/resumeFormProvider';

const ResumeBody: FC<ResumeBodyProps> = () => {
  const { resume, updateAbout, isEditing } = useResumeContext();

  return (
    <div>
      <section className="mb-7">
        <Heading title="Обо мне" />
        <div>
          <ContentEditable
            className="outline-none editablePlaceholder text-xl text-system-600"
            placeholder="Напишите сопроводительное сообщение о себе в несколько строк"
            html={resume?.about || ''}
            disabled={!isEditing}
            onChange={(e) => updateAbout?.(e.target.value)}
          />
        </div>
      </section>
      <BlocksList />
    </div>
  );
};

export default ResumeBody;
