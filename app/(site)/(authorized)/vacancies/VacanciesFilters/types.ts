import { Option } from '@/app/components/Select/types';

export type VacanciesFiltersProps = {};

export type VacanciesFilterItem = {
  label: string;
  placeholder: string;
  options: Option<string | number>[];
};
