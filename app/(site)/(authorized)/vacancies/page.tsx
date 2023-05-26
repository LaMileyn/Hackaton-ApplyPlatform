'use client';

import { Button, Container } from '@/app/components';
import VacanciesList from './components/VacanciesList/VacanciesList';
import VacanciesFilters from './components/VacanciesFilters/VacanciesFilters';
import { IoMdAdd } from 'react-icons/io';
import useUser from '@/app/hooks/useUser/useUser';
import { EUserRole } from '@/app/types/users';

const VacaniesPage = () => {
  const user = useUser();

  return (
    <Container>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl text-primary-500">Вакансии</h1>
        {user?.role === EUserRole.RECRUTER && (
          <Button variant="secondary" iconLeft={<IoMdAdd />}>
            Добавить вакансию
          </Button>
        )}
      </div>
      <div className="flex gap-4 items-start">
        <VacanciesList />
        <VacanciesFilters />
      </div>
    </Container>
  );
};

export default VacaniesPage;
