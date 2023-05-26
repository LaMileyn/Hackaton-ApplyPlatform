import { Applie } from '@/app/types/applies';

export type AppliesListProps = {
  applies: Applie[];
  openInfoBar: (val: boolean) => void;
};
