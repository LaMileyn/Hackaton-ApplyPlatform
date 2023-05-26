import { deleteCookie, getCookie, setCookie } from '@/app/helpers';
import { User } from '@/app/types/users';

export const USER_COOKIES_KEY = 'USER';

export function saveUser(user: User): void {
  setCookie(USER_COOKIES_KEY, JSON.stringify(user));
}

export function getUser(): User | undefined {
  const user = getCookie(USER_COOKIES_KEY);
  return user ? JSON.parse(user) : undefined;
}

export function removeUser(): void {
  deleteCookie(USER_COOKIES_KEY);
}
