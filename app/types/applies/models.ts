import { BaseModel } from '../common/models';
import { Vacancy } from '../vacancies';

export enum EApplieStatus {
  REJECTED = 0,
  PROCCESS = 1,
  INVITE = 2,
}
export type Applie = {
  comment?: string;
  status: EApplieStatus;
} & BaseModel;

export type ApplieWithVacancy = {
  vacancy: Vacancy;
} & Applie;
