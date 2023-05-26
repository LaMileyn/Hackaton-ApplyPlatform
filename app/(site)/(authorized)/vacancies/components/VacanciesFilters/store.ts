import { VacanciesFilterItem } from './types';

export const filtersData: VacanciesFilterItem[] = [
  {
    label: 'Город',
    code: 'city',
    placeholder: 'Все города',
    options: [
      { title: 'Челябинск', value: 'chel' },
      { title: 'Москва', value: 'moscow' },
      { title: 'Новосибирск', value: 'novosib' },
      { title: 'Яха', value: 'igig' },
    ],
  },
  {
    label: 'Компания',
    code: 'company',
    placeholder: 'Все компании',
    options: [
      { title: 'Челябинск', value: 'chel' },
      { title: 'Москва', value: 'aga' },
      { title: 'Новосибирск', value: 'uhu' },
      { title: 'Яха', value: 'igig' },
    ],
  },
  {
    label: 'Специализация',
    code: 'spec',
    placeholder: 'Все специальности',
    options: [
      { title: 'Челябинск', value: 'chel' },
      { title: 'Москва', value: 'aga' },
      { title: 'Новосибирск', value: 'uhu' },
      { title: 'Яха', value: 'igig' },
    ],
  },
  {
    label: 'Опыт работы',
    code: 'experience',
    placeholder: 'Любой',
    options: [
      { title: 'Без опыта', value: 'chel' },
      { title: 'До года', value: 'aga' },
      { title: 'От года до трех', value: 'uhu' },
      { title: 'От трех лет', value: 'igig' },
    ],
  },
  {
    label: 'Тип занятости',
    code: 'workType',
    placeholder: 'Любой',
    options: [
      { title: 'Челябинск', value: 'chel' },
      { title: 'Москва', value: 'aga' },
      { title: 'Новосибирск', value: 'uhu' },
      { title: 'Яха', value: 'igig' },
    ],
  },
];
