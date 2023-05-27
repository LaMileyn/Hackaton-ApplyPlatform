'use client';

import { Button, Container } from '@/app/components';
import UsersTable from './components/UsersTable/UsersTable';
import { IoIosArrowBack } from 'react-icons/io';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { vacanciesService } from '@/app/services';

const VacancyCandidatesPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const { data } = useQuery(['vacancy_candidates'], () =>
    vacanciesService.getVacancyApplies(+id)
  );

  return (
    <Container>
      <div className="mb-4">
        <Button
          variant="transparent"
          iconLeft={<IoIosArrowBack />}
          onClick={() => router.back()}
        >
          К вакансии
        </Button>
      </div>
      <div className="flex item-start justify-between mb-4">
        <div>
          <h1 className="text-4xl text-primary-500">Middle iOS разработчик</h1>
          <p className="text-base text-system-600 mt-2">
            Новосибирск • Информационные технологии, интернет, телеком • 3-5 лет
            • Удаленная работа
          </p>
        </div>
        <div>
          <div className="flex gap-2">
            <Button variant="secondary">Закрыть вакансию</Button>
            <Button>Интегрировать</Button>
          </div>
        </div>
      </div>

      <UsersTable data={data || []} />
    </Container>
  );
};

export default VacancyCandidatesPage;
