'use client';

import { Container, SidebarInfo } from '@/app/components';
import AppliesList from './components/AppliesList';
import { Applie, ApplieWithVacancy, EApplieStatus } from '@/app/types/applies';
import { useState } from 'react';
import ApplyInfo from './components/ApplyInfo';
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
      <ApplyInfo isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default AppliesPage;
