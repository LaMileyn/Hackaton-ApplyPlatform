import { ApplieWithCV } from '@/app/types/applies';

export type UsersTableProps = {
  data: ApplieWithCV[];
  setApplyId: (id: number) => void;
};
