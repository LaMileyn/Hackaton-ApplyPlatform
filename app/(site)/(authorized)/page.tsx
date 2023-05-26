'use client';

import { Container, Heading } from '@/app/components';
import useUser from '@/app/hooks/useUser/useUser';
import { EUserRole } from '@/app/types/users';
import CandidateDashboard from './components/CandidateDashBoard/CandidateDashboard';

export default function Home() {
  const user = useUser();

  const role = user?.role;
  const isCandidate = role === EUserRole.CANDIDATE;
  const isRecruter = role === EUserRole.RECRUTER;
  const isCustomer = role === EUserRole.CUSTOMER;

  return (
    <Container>
      <h1 className="text-4xl text-primary-500 mb-12">Главная</h1>
      {isCandidate && <CandidateDashboard />}
      {isRecruter && <CandidateDashboard />}
      {isCustomer && <CandidateDashboard />}
    </Container>
  );
}
