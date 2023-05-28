'use client';

import { ClientOnly, Container, SidebarInfo } from '@/app/components';
import AppliesList from './components/AppliesList';
import { ApplieWithVacancy, EApplieStatus } from '@/app/types/applies';
import { useState } from 'react';
import { EVacancyStatus } from '@/app/types/vacancies';

const AppliesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ClientOnly>
        <Container>
          <h1 className="text-4xl text-primary-500 mb-4">Отклики</h1>
          <AppliesList openInfoBar={setIsOpen} />
        </Container>
        <SidebarInfo
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          stages={[]}
          title="Middle iOS разработчик"
          fromForm={false}
          subtitle="Совкомбанк"
        />
      </ClientOnly>
    </div>
  );
};

export default AppliesPage;
