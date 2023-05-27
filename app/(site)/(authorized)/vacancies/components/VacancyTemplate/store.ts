import { EVacancyStatus, VacancyWithTemplates } from '@/app/types/vacancies';

export const mockTemplates: VacancyWithTemplates = {
  company: '',
  ID: 1,
  status: EVacancyStatus.NEW,
  templates: [
    {
      ID: 1,
      description: '',
      title: '',
    },
  ],
  title: '',
  description: '',
};
