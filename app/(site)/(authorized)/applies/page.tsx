'use client';

import { Container } from '@/app/components';
import AppliesList from './components/AppliesList/AppliesList';
import { Applie } from '@/app/types/applies';
import { useState } from 'react';

const mockData: Applie[] = [
  {
    id: '1',
    vacancy: {
      description: 'Hello',
      title: 'Frontend Developer',
      company: 'Vkontakte',
    },
  },
  {
    id: '2',
    vacancy: {
      description: 'Hello world',
      title: 'Middle Frontend Developer',
      company: 'Vkontakte',
    },
  },
  {
    id: '3',
    vacancy: {
      description: 'Wooooooo',
      title: 'Senior Frontend Developer',
      company: 'Microsoft',
    },
  },
  {
    id: '4',
    vacancy: {
      description: 'Lorem15',
      title: 'Backend Java/Laravel',
      company: 'Vkontakte',
    },
  },
];

const AppliesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div>
      <Container>
        <h1 className="text-4xl text-primary-500 mb-4">Отклики</h1>
        <AppliesList applies={mockData} openInfoBar={setIsOpen} />
      </Container>
    </div>
  );
};

export default AppliesPage;
