import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { Route } from './types';
import {
  APPLIES_ROUTE,
  HOME_ROUTE,
  PROFILE_ROUTE,
  TESTS_ROUTE,
  VACANCIES_ROUTE,
} from '@/app/const/appRoutes';
import { RxDashboard } from 'react-icons/rx';
import useSignOut from '../useSignOut/useSignOut';
import useUser from '../useUser/useUser';
import { EUserRole } from '@/app/types/users';

const useRoutes = () => {
  const signOut = useSignOut();
  const pathname = usePathname();
  const user = useUser();

  const isRecruter = user?.role === EUserRole.RECRUTER;
  const checkActive = (route: string) => pathname === route;

  let mainRoutes = useMemo<Route[]>(
    () => [
      {
        label: 'Главная',
        Icon: RxDashboard,
        link: HOME_ROUTE,
        isActive: checkActive(HOME_ROUTE),
      },
      {
        label: 'Профиль',
        Icon: RxDashboard,
        link: PROFILE_ROUTE,
        isActive: checkActive(PROFILE_ROUTE),
        hidden: isRecruter,
      },
      {
        label: 'Вакансии',
        Icon: RxDashboard,
        link: VACANCIES_ROUTE,
        isActive: checkActive(VACANCIES_ROUTE),
      },
      {
        label: 'Отклики',
        Icon: RxDashboard,
        link: APPLIES_ROUTE,
        isActive: checkActive(APPLIES_ROUTE),
        hidden: isRecruter,
      },
      {
        label: 'Тесты',
        Icon: RxDashboard,
        link: TESTS_ROUTE,
        isActive: checkActive(TESTS_ROUTE),
        hidden: !isRecruter,
      },
    ],
    [pathname]
  );
  const bottomRoutes = useMemo<Route[]>(
    () => [
      {
        label: 'Выйти',
        Icon: RxDashboard,
        link: '#',
        onClick: () => signOut(),
      },
    ],
    [pathname]
  );

  const filteredRoutes = useMemo<Route[]>(() => {
    return mainRoutes.filter((route) => !route.hidden);
  }, [mainRoutes]);

  return {
    mainRoutes: filteredRoutes,
    bottomRoutes,
  };
};

export default useRoutes;
