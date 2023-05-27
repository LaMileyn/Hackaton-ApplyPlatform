import { EVacancyStatus, VacancyWithTemplates } from '@/app/types/vacancies';

export const mockTemplates: VacancyWithTemplates = {
  company: '',
  id: 1,
  status: EVacancyStatus.NEW,
  templates: [
    {
      id: 1,
      description: '',
      title: '',
    },
  ],
  title: '',
  description: '',
};
