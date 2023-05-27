import { VacancyTemplate } from '@/app/types/vacancies';

export type VacancyBlockListProps = {
  deleteBlock: (id: number) => void;
  updateBlock: (block: VacancyTemplate) => void;
  templates: VacancyTemplate[];
  isEditMode: boolean;
};
