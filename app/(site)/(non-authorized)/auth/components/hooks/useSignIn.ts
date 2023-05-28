import { HOME_ROUTE } from '@/app/const/appRoutes';
import { userService } from '@/app/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const useSignIn = (email: string, password: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: signIn, isError } = useMutation(
    () => userService.login({ email, password }),
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['currentUser'], data);
        router.push(HOME_ROUTE);
      },
    }
  );

  return {
    isError,
    signIn,
  };
};

export default useSignIn;
