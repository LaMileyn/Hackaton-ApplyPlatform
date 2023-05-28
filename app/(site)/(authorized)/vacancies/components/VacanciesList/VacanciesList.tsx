'use client';

import React, { FC } from 'react';
import { VacanciesListProps } from './types';
import { Card, Placeholder } from '@/app/components';
import { useQuery } from '@tanstack/react-query';
import { vacanciesService } from '@/app/services';
import { useRouter, useSearchParams } from 'next/navigation';
import { fakeVacancies } from './store';
import useUser from '@/app/hooks/useUser/useUser';
import { EUserRole } from '@/app/types/users';
import { VACANCIES_ROUTE } from '@/app/const/appRoutes';

const VacanciesList: FC<VacanciesListProps> = () => {
  const searchParams = useSearchParams();
  const user = useUser();
  const router = useRouter();
  const { data: vacancies } = useQuery(
    ['vacancies', searchParams.toString()],
    () => vacanciesService.getAll(searchParams.toString())
  );
  return (
    <div className="flex-1">
      {vacancies?.length === 0 && (
        <Placeholder text="Список вакансий пуст..." />
      )}
      {vacancies?.map((vacancy) => (
        <Card
          key={vacancy.ID}
          company={vacancy.company}
          title={vacancy.title}
          description={vacancy.description}
          isCandidate={user?.role === EUserRole.CANDIDATE}
          vacancyStatus={vacancy.status}
          onClick={() => router.push(`${VACANCIES_ROUTE}/${vacancy.ID}`)}
        />
      ))}
    </div>
  );
};

export default VacanciesList;
