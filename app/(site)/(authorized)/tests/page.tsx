'use client';

import { Button, Container } from '@/app/components';
import { IoMdAdd } from 'react-icons/io';
import TestsList from './components/TestsList/TestsList';

const TestsPage = () => {
  return (
    <Container>
      <div className="flex items-start justify-between mb-5">
        <h1 className="text-4xl text-primary-500 mb-4">Мои тесты</h1>
        <Button iconLeft={<IoMdAdd />} variant="secondary">
          Добавить тест
        </Button>
      </div>
      <TestsList />
    </Container>
  );
};

export default TestsPage;
