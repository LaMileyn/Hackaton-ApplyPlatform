'use client';

import { ClientOnly, Container } from '@/app/components';
import useUser from '@/app/hooks/useUser/useUser';
import { EUserRole } from '@/app/types/users';
import CandidateDashboard from './components/CandidateDashBoard/CandidateDashboard';
import RecruterDashboard from './components/RecruterDashboard/RecruterDashboard';

export default function Home() {
  const user = useUser();

  const role = user?.role;
  const isCandidate = role === EUserRole.CANDIDATE;
  const isRecruter = role === EUserRole.RECRUTER;
  const isCustomer = role === EUserRole.CUSTOMER;

  return (
    <ClientOnly>
      <Container>
        <h1 className="text-4xl text-primary-500 mb-12">Главная</h1>
        {isCandidate && <CandidateDashboard />}
        {isRecruter && <RecruterDashboard />}
      </Container>
    </ClientOnly>
  );
}
