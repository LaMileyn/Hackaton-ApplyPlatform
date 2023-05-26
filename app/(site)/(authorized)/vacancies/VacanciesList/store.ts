import { generateUuid } from '@/app/helpers';
import { EVacancyStatus, Vacancy } from '@/app/types/vacancies';

export const fakeVacancies: Vacancy[] = [
  {
    id: 1,
    company: 'Оскорп',
    status: EVacancyStatus.INTERVIEW,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    title: 'Middle frontend engineer',
  },
  {
    id: 2,
    company: 'Майкрософт',
    status: EVacancyStatus.NEW,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    title: 'Junior frontend',
  },
  {
    id: 3,
    company: 'Одноклассники',
    status: EVacancyStatus.SEARCH,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    title: 'Middle frontend engineer',
  },
  {
    id: 4,
    company: 'Vk',
    status: EVacancyStatus.INTERVIEW,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    title: 'Senior/Middle frontend engineer',
  },
];
