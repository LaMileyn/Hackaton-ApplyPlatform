'use client';

import React, { FC, useCallback } from 'react';
import { AppliesListProps } from './types';
import { Card, Placeholder } from '@/app/components';
import { useQuery } from '@tanstack/react-query';
import { appliesService } from '@/app/services';

const AppliesList: FC<AppliesListProps> = ({ openInfoBar, setId }) => {
  const handleInfoBarOpen = useCallback(
    (id: number) => {
      openInfoBar(true);
      setId(id);
    },
    [openInfoBar]
  );

  const { data } = useQuery(['my-applies'], () =>
    appliesService.getMyApplies()
  );

  return (
    <div>
      {data?.length === 0 && (
        <Placeholder text="Список откликов пока еще пуст...." />
      )}
      {data?.map((el) => {
        return (
          <Card
            onClick={() => handleInfoBarOpen(el.apply.ID)}
            key={el.apply.ID}
            company={el.vacancy.company}
            description={el.vacancy.description}
            title={el.vacancy.title}
            isCandidate={true}
            applyStatus={el.apply.status}
          />
        );
      })}
    </div>
  );
};

export default AppliesList;
