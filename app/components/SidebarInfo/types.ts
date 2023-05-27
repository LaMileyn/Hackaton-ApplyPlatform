import { Stage } from '@/app/types/stages';

export type SidebarInfoProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  title: string;
  subtitle: string;
  fromForm: boolean;
  stages: Stage[];
};
