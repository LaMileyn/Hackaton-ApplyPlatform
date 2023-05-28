'use client';

import { Card, Placeholder } from '@/app/components';
import { VACANCIES_ROUTE } from '@/app/const/appRoutes';
import { vacanciesService } from '@/app/services';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { VacanciesListProps } from './types';

const VacanciesList: FC<VacanciesListProps> = ({ isCandidate }) => {
  const { data } = useQuery(['vacancies'], () => vacanciesService.getAll());
  const router = useRouter();

  return (
    <div>
      {data?.length === 0 && <Placeholder text="Список вакансий еще пуст..." />}
      {data?.slice(0, 3).map((vacancy, i) => (
        <Card
          key={i}
          company={vacancy.company}
          isCandidate={isCandidate}
          title={vacancy.title}
          vacancyStatus={vacancy.status}
          onClick={() => router.push(`${VACANCIES_ROUTE}/${vacancy.ID}`)}
          description={vacancy.description}
        />
      ))}
    </div>
  );
};

export default VacanciesList;
