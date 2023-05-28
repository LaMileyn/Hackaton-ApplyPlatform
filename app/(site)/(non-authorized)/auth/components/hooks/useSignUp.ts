import { HOME_ROUTE } from '@/app/const/appRoutes';
import { userService } from '@/app/services';
import { EUserRole } from '@/app/types/users';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const useSignUp = (
  email: string,
  password: string,
  role: EUserRole,
  fullName: string
) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: signUp, isError } = useMutation(
    () =>
      userService.register({
        email,
        password,
        role,
        fullName,
      }),
    {
      onSuccess: (data) => {
        queryClient.setQueriesData(['currentUser'], data);
        router.push(HOME_ROUTE);
      },
    }
  );

  return { signUp, isError };
};

export default useSignUp;
