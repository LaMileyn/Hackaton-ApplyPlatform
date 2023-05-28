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
      { title: 'Владивосток', value: 'vladib' },
      { title: 'Уфа', value: 'ufa' },
      { title: 'Нижневартовск', value: 'niznebar' },
      { title: 'Сатка', value: 'satka' },
      { title: 'Санта-Моника', value: 'santa-monika' },
      { title: 'Бакал', value: 'bakal' },
    ],
  },
  {
    label: 'Компания',
    code: 'company',
    placeholder: 'Все компании',
    options: [
      { title: 'Vkontakte', value: 'chel' },
      { title: 'Yandex', value: 'yandex' },
      { title: 'Google', value: 'google' },
      { title: 'Открытие', value: 'open' },
      { title: 'Сбербанк', value: 'sber' },
      { title: 'Совкомбане', value: 'sovkom' },
    ],
  },
  {
    label: 'Опыт работы',
    code: 'experience',
    placeholder: 'Любой',
    options: [
      { title: 'Без опыта', value: 'noexpt' },
      { title: 'До года', value: 'yaerbefo' },
      { title: 'От года до трех', value: '3more' },
      { title: 'От трех лет', value: '4more' },
    ],
  },
  {
    label: 'Тип занятости',
    code: 'workType',
    placeholder: 'Любой',
    options: [
      { title: 'Полный день', value: 'full' },
      { title: 'Частичная', value: 'hardly' },
      { title: 'Вахтой', value: 'vahta' },
      { title: 'Через день', value: 'throw' },
    ],
  },
];
