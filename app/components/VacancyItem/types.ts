import { Vacancy } from '@/app/types/vacancies';

export type VacancyItemProps = {
  title: string;
  company: string;
  description: string;
  isCandidate: boolean;
  onClick: () => void;
  status?: string;
  vacancieType: 'apply' | 'vacancy';
};
