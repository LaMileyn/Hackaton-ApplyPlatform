import { ClientOnly } from '@/app/components';
import VacanciesTemplate from '../components/VacancyTemplate/VacancyTemplate';

const CreateVacancyPage = () => {
  return (
    <ClientOnly>
      <VacanciesTemplate />;
    </ClientOnly>
  );
};

export default CreateVacancyPage;
