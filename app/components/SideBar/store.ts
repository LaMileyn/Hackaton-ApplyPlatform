import { Route } from './types';
import { RxDashboard } from 'react-icons/rx';

export const mainRoutes: Route[] = [
  {
    label: 'Главная',
    Icon: RxDashboard,
    link: '/',
  },
  {
    label: 'Профиль',
    Icon: RxDashboard,
    link: '/profile',
  },
  {
    label: 'Вакансии',
    Icon: RxDashboard,
    link: '/vacancies',
  },
  {
    label: 'Отклики',
    Icon: RxDashboard,
    link: '/applies',
  },
];

export const extraRoutes = [
  {
    label: 'Уведомления',
    Icon: RxDashboard,
    link: '',
  },
  {
    label: 'Выйти',
    Icon: RxDashboard,
    link: '',
  },
];
