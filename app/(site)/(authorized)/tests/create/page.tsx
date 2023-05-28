import { ClientOnly } from '@/app/components';
import TestTemplate from '../components/TestTemplate/TestTemplate';

const CreateTestPage = () => {
  return (
    <ClientOnly>
      <TestTemplate />
    </ClientOnly>
  );
};

export default CreateTestPage;
