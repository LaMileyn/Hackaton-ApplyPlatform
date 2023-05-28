'use client';

import { ClientOnly, Container, SidebarInfo } from '@/app/components';
import AppliesList from './components/AppliesList';
import { ApplieWithVacancy, EApplieStatus } from '@/app/types/applies';
import { useState } from 'react';
import { EVacancyStatus } from '@/app/types/vacancies';

const AppliesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState<number | null>(null);

  return (
    <div>
      <ClientOnly>
        <Container>
          <h1 className="text-4xl text-primary-500 mb-4">Отклики</h1>
          <AppliesList openInfoBar={setIsOpen} setId={setId} />
        </Container>
        <SidebarInfo
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          fromForm={false}
          id={id}
        />
      </ClientOnly>
    </div>
  );
};

export default AppliesPage;
