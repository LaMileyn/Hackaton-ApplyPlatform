import { EAuthFormTab } from '../AuthForm/types';

export type FormTabsProps = {
  activeTab: string;
  setActiveTab: (tab: EAuthFormTab) => void;
};
