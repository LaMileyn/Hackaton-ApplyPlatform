import { NextRequest, NextResponse } from 'next/server';
import {
  AUTH_ROUTE,
  HOME_ROUTE,
  NOTIFICATIONS_ROUTE,
  PROFILE_ROUTE,
  TESTS_ROUTE,
  VACANCIES_ROUTE,
} from './app/const/appRoutes';
import { USER_COOKIES_KEY } from './app/hooks/useUser/helpers';

const privateRoutes = [
  PROFILE_ROUTE,
  VACANCIES_ROUTE,
  NOTIFICATIONS_ROUTE,
  TESTS_ROUTE,
];
export function middleware(request: NextRequest) {
  const { cookies } = request;
  const url = request.url;
  const token = cookies.get('USER');
  if (url.includes(AUTH_ROUTE)) {
    if (token) {
      return NextResponse.redirect(new URL(HOME_ROUTE, request.url));
    }
  }
  if (privateRoutes.some((curr) => url.includes(curr))) {
    if (!token && !url.includes(AUTH_ROUTE)) {
      console.log(url);
      return NextResponse.redirect(new URL(AUTH_ROUTE, request.url));
    }
  }
}
