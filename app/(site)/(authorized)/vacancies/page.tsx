'use client';

import { Container } from '@/app/components';
import VacanciesList from './VacanciesList/VacanciesList';
import { fakeVacancies } from './VacanciesList/store';
import VacanciesFilters from './VacanciesFilters/VacanciesFilters';

const VacaniesPage = () => {
  return (
    <Container>
      <div className="flex gap-4">
        <VacanciesList vacancies={fakeVacancies} />
        <VacanciesFilters />
      </div>
    </Container>
  );
};

export default VacaniesPage;
