import { ClientOnly } from '@/app/components';
import ResumeTemplate from '../components/ResumeTemplate/ResumeTemplate';

const CreateResumePage = () => {
  return (
    <ClientOnly>
      <ResumeTemplate />
    </ClientOnly>
  );
};

export default CreateResumePage;
