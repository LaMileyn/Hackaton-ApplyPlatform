'use client';

import { Container } from '@/app/components';
import VacanciesList from './VacanciesList/VacanciesList';
import { fakeVacancies } from './VacanciesList/store';
import VacanciesFilters from './VacanciesFilters/VacanciesFilters';

const VacaniesPage = () => {
  return (
    <Container>
      <h1 className="text-4xl text-primary-500 mb-4">Вакансии</h1>
      <div className="flex gap-4 items-start">
        <VacanciesList vacancies={fakeVacancies} />
        <VacanciesFilters />
      </div>
    </Container>
  );
};

export default VacaniesPage;
