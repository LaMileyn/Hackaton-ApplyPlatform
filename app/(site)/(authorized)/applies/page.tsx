'use client';

import { Container, SidebarInfo } from '@/app/components';
import AppliesList from './components/AppliesList';
import { Applie, ApplieWithVacancy, EApplieStatus } from '@/app/types/applies';
import { useState } from 'react';
import { EVacancyStatus } from '@/app/types/vacancies';

const mockData: ApplieWithVacancy[] = [
  {
    id: 1,
    comment: 'Mobile Frontend Developer',
    status: EApplieStatus.INVITE,
    vacancy: {
      id: 1,
      status: EVacancyStatus.INTERVIEW,
      description: 'Hello',
      title: 'Frontend Developer',
      company: 'Vkontakte',
    },
  },
  {
    id: 2,
    comment: 'Senior Frontend Developer',
    status: EApplieStatus.INVITE,
    vacancy: {
      id: 2,
      status: EVacancyStatus.INTERVIEW,
      description: 'Hello',
      title: 'Frontend Developer',
      company: 'Vkontakte',
    },
  },
];

const AppliesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Container>
        <h1 className="text-4xl text-primary-500 mb-4">Отклики</h1>
        <AppliesList applies={mockData} openInfoBar={setIsOpen} />
      </Container>
      <SidebarInfo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        stages={[]}
        title="Middle iOS разработчик"
        fromForm={false}
        subtitle="Совкомбанк"
      />
    </div>
  );
};

export default AppliesPage;
