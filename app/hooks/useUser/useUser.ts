'use client;';

import { userService } from '@/app/services';
import { User } from '@/app/types/users';
import { useQuery } from '@tanstack/react-query';
import * as userLocalStorage from './helpers';
import { useEffect } from 'react';

const useUser = () => {
  const { data: user } = useQuery<User | null>(
    ['currentUser'],
    async (): Promise<User | null> => userService.getUser(user),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      initialData: userLocalStorage.getUser(),
      onError: () => {
        userLocalStorage.removeUser();
      },
    }
  );
  useEffect(() => {
    if (!user) userLocalStorage.removeUser();
    else userLocalStorage.saveUser(user);
  }, [user]);

  return user ?? null;
};

export default useUser;
