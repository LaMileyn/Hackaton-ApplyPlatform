import { generateUuid } from '@/app/helpers';
import { Vacancy } from '@/app/types/vacancies';

export const fakeVacancies: Vacancy[] = [
  {
    id: generateUuid(),
    company: 'Оскорп',
    infoBlocks: [],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    title: 'Middle frontend engineer',
  },
  {
    id: generateUuid(),
    company: 'Майкрософт',
    infoBlocks: [],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    title: 'Junior frontend',
  },
  {
    id: generateUuid(),
    company: 'Одноклассники',
    infoBlocks: [],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    title: 'Middle frontend engineer',
  },
  {
    id: generateUuid(),
    company: 'Vk',
    infoBlocks: [],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    title: 'Senior/Middle frontend engineer',
  },
];
