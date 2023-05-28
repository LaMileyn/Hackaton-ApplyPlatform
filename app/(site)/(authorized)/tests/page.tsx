'use client';

import { Button, ClientOnly, Container } from '@/app/components';
import { IoMdAdd } from 'react-icons/io';
import TestsList from './components/TestsList/TestsList';
import { useRouter } from 'next/navigation';
import { TESTS_ROUTE } from '@/app/const/appRoutes';

const TestsPage = () => {
  const router = useRouter();
  return (
    <ClientOnly>
      <Container>
        <div className="flex items-start justify-between mb-5">
          <h1 className="text-4xl text-primary-500 mb-4">Мои тесты</h1>
          <Button
            iconLeft={<IoMdAdd />}
            variant="secondary"
            onClick={() => router.push(TESTS_ROUTE + '/' + 'create')}
          >
            Добавить тест
          </Button>
        </div>
        <TestsList />
      </Container>
    </ClientOnly>
  );
};

export default TestsPage;
