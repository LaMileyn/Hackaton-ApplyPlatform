import { VacanciesFilterItem, VacancyCode } from '../../types';

export type VacanciesFilterItemProps = {
  item: VacanciesFilterItem;
  value: string;
  onChange: (code: VacancyCode, value: string) => void;
};
