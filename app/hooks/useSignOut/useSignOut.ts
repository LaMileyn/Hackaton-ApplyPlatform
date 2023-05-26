import { AUTH_ROUTE } from '@/app/const/appRoutes';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const useSignOut = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const signOut = useCallback(() => {
    queryClient.setQueryData(['currentUser'], null);
    router.push(AUTH_ROUTE);
  }, [router, queryClient]);

  return signOut;
};

export default useSignOut;
