import { BaseModel } from '../common/models';

export type VacancyInfoBlock = {
  title: string;
  text: string;
};

export enum EVacancyStatus {
  NEW = 1,
  SEARCH = 2,
  INTERVIEW = 3,
}
export type Vacancy = {
  title: string;
  company: string;
  description?: string;
  status: EVacancyStatus;
} & BaseModel;

export type VacancyWithTemplates = {
  templates: VacancyTemplate[];
} & Vacancy;

export type VacancyTemplate = {
  title: string;
  description: string;
} & BaseModel;
