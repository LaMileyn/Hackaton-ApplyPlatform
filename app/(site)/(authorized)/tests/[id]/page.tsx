import { Button, ClientOnly, Container } from '@/app/components';
import { IoIosArrowBack } from 'react-icons/io';
import TestTemplate from '../components/TestTemplate/TestTemplate';

const TestPage = () => {
  return (
    <ClientOnly>
      <TestTemplate />
    </ClientOnly>
  );
};

export default TestPage;
