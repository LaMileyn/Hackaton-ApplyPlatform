'use client';

import { Button, ClientOnly, Container, SidebarInfo } from '@/app/components';
import UsersTable from './components/UsersTable/UsersTable';
import { IoIosArrowBack } from 'react-icons/io';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { vacanciesService } from '@/app/services';
import { useState } from 'react';

const VacancyCandidatesPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);

  const { data } = useQuery(
    ['vacancy_candidates'],
    () => vacanciesService.getVacancyApplies(+id),
    {
      refetchInterval: 10000,
    }
  );

  const handleSelectRow = (id: number) => {
    setSelectedRowId(id);
    setIsOpen(true);
  };

  return (
    <ClientOnly>
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
            <h1 className="text-4xl text-primary-500">{data?.vacancy.title}</h1>
            <p className="text-base text-system-600 mt-2">
              {data?.vacancy.description}
            </p>
          </div>
          <div>
            <div className="flex gap-2">
              <Button variant="secondary">Закрыть вакансию</Button>
              <Button>Интегрировать</Button>
            </div>
          </div>
        </div>

        <UsersTable data={data?.applies || []} setApplyId={handleSelectRow} />
      </Container>
      <SidebarInfo
        fromForm={true}
        id={selectedRowId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </ClientOnly>
  );
};

export default VacancyCandidatesPage;
