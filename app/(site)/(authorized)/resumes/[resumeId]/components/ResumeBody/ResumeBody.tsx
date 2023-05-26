'use client';

import { Heading } from '@/app/components';
import React, { FC } from 'react';
import BlocksList from '../BlocksList/BlocksList';
import { ResumeBodyProps } from './types';

const ResumeBody: FC<ResumeBodyProps> = ({ blocks }) => {
  return (
    <div>
      <section className="mb-7">
        <Heading title="Обо мне" />
        <p className="">
          Напишите сопроводительное сообщение о себе в несколько строк
        </p>
      </section>
      <BlocksList blocks={[]} />
    </div>
  );
};

export default ResumeBody;
