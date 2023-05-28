'use client';

import { Card, Placeholder } from '@/app/components';
import { appliesService } from '@/app/services';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

const AppliesList: FC = () => {
  const { data } = useQuery(['applies'], () => appliesService.getMyApplies());
  const router = useRouter();
  return (
    <div>
      {(!data || data?.length === 0) && (
        <Placeholder text="Вы еще не откликнулись ни на одну вакансию" />
      )}
      {data?.slice(0, 3).map((apply) => (
        <Card
          key={apply.apply.ID}
          company={apply.vacancy.company}
          isCandidate={true}
          title={apply.vacancy.title}
          applyStatus={apply.apply.status}
          description={apply.vacancy.description}
        />
      ))}
    </div>
  );
};

export default AppliesList;
