import { generateUuid } from '@/app/helpers';
import { EVacancyStatus, Vacancy } from '@/app/types/vacancies';

export const fakeVacancies: Vacancy[] = [
  {
    ID: 1,
    company: 'Оскорп',
    status: EVacancyStatus.INTERVIEW,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    title: 'Middle frontend engineer',
  },
  {
    ID: 2,
    company: 'Майкрософт',
    status: EVacancyStatus.NEW,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    title: 'Junior frontend',
  },
  {
    ID: 3,
    company: 'Одноклассники',
    status: EVacancyStatus.SEARCH,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    title: 'Middle frontend engineer',
  },
  {
    ID: 4,
    company: 'Vk',
    status: EVacancyStatus.INTERVIEW,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    title: 'Senior/Middle frontend engineer',
  },
];
