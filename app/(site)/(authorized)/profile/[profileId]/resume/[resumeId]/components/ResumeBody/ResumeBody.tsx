'use client';

import { Heading } from '@/app/components';
import React, { FC } from 'react';
import BlocksList from '../BlocksList/BlocksList';
import { blocksData } from './store';

const ResumeBody: FC = () => {
  return (
    <div>
      <section className="mb-7">
        <Heading title="Обо мне" />
        <p className="">
          Напишите сопроводительное сообщение о себе в несколько строк
        </p>
      </section>
      <BlocksList blocks={blocksData} />
    </div>
  );
};

export default ResumeBody;
