import { BaseModel } from '../common/models';
import { Vacancy } from '../vacancies';

export enum EApplieStatus {
  REJECTED = 1,
  PROCCESS = 2,
  INVITE = 3,
}
export type Applie = {
  comment?: string;
  status: EApplieStatus;
} & BaseModel;

export type ApplieWithVacancy = {
  vacancy: Vacancy;
} & Applie;
