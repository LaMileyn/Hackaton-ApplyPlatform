'use client';

import { Card } from '@/app/components';
import { VACANCIES_ROUTE } from '@/app/const/appRoutes';
import { vacanciesService } from '@/app/services';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

const VacanciesList: FC = () => {
  const { data } = useQuery(['vacancies'], () => vacanciesService.getAll());
  const router = useRouter();

  return (
    <div>
      {data?.slice(0, 3).map((vacancy, i) => (
        <Card
          key={i}
          company={vacancy.company}
          isCandidate={true}
          title={vacancy.title}
          onClick={() => router.push(`${VACANCIES_ROUTE}/${vacancy.ID}`)}
          description={vacancy.description}
        />
      ))}
    </div>
  );
};

export default VacanciesList;
