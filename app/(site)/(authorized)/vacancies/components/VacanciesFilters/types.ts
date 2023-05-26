import { Option } from '@/app/components/Select/types';

export type VacanciesFiltersProps = {};

export type VacanciesFilterItem = {
  label: string;
  code: VacancyCode;
  placeholder: string;
  options: Option<string>[];
};

export type VacancyCode =
  | 'city'
  | 'company'
  | 'spec'
  | 'experience'
  | 'workType';
