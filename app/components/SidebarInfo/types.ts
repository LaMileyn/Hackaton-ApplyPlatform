import { Stage } from '@/app/types/stages';

export type SidebarInfoProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  fromForm: boolean;
  id: number | null;
};
