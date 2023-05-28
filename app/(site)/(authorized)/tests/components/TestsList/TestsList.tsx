'use client';

import { Card, Placeholder } from '@/app/components';
import { testsService } from '@/app/services';
import { useQuery } from '@tanstack/react-query';
import React, { FC } from 'react';

const TestsList: FC = () => {
  const { data: tests } = useQuery(['tests'], testsService.getMyTests);

  return (
    <div className="flex flex-col gap-1">
      {tests?.length === 0 && <Placeholder text="Список тестов пуст..." />}
      {tests?.map((test, i) => (
        <Card
          key={i}
          title={test.title}
          isCandidate={true}
          description={test.description}
        />
      ))}
    </div>
  );
};

export default TestsList;
