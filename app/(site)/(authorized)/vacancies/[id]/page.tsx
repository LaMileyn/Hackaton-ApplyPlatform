'use client';

import { useParams } from 'next/navigation';
import VacanciesTemplate from '../components/VacancyTemplate/VacancyTemplate';
import { ClientOnly } from '@/app/components';

const VacancyPage = () => {
  const { id } = useParams();

  return (
    <ClientOnly>
      <VacanciesTemplate ID={+id} />
    </ClientOnly>
  );
};

export default VacancyPage;
