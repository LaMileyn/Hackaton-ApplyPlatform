import { Option } from '@/app/components/Select/types';
import { EUserRole } from '@/app/types/users';

export const selectOptions: Option<EUserRole>[] = [
  { title: 'Рекрутер', value: EUserRole.RECRUTER },
  { title: 'Заказчик', value: EUserRole.CUSTOMER },
];
