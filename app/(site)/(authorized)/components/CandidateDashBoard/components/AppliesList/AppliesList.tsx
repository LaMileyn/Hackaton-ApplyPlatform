'use client';

import { Card } from '@/app/components';
import { VACANCIES_ROUTE } from '@/app/const/appRoutes';
import { appliesService } from '@/app/services';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

const AppliesList: FC = () => {
  const { data } = useQuery(['applies'], () => appliesService.getMyApplies());
  const router = useRouter();
  return (
    <div>
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
