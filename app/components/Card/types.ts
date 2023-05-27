import { EApplieStatus } from '@/app/types/applies';
import { EVacancyStatus, Vacancy } from '@/app/types/vacancies';

export type CardProps = {
  title: string;
  company?: string;
  description?: string;
  mode?: CardMode;
  onClick?: () => void;
  applyStatus?: EApplieStatus;
  vacancyStatus?: EVacancyStatus;
  isCandidate: boolean;
};

type CardMode = 'compact' | 'normal';
