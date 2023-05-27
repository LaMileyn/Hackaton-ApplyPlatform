'use client';

import React, { FC, useCallback, useState } from 'react';
import { BlockListProps, ResumeStokeKeys } from './types';
import BlockItem from '../BlockItem';
import { Button, HorisontalAdd } from '@/app/components';
import { IoMdAdd } from 'react-icons/io';
import { useResumeContext } from '@/app/providers/resumeFormProvider/resumeFormProvider';

const BlocksList: FC<BlockListProps> = () => {
  const { resume, addBlock } = useResumeContext();

  return (
    <>
      <ul>
        {resume?.blocks.map((block) => (
          <BlockItem key={block.ID} block={block} />
        ))}
      </ul>
      <HorisontalAdd
        btnText="Добавить свободный блок"
        onClick={() => addBlock?.()}
      />
    </>
  );
};

export default BlocksList;
