import { BaseModel } from '../common/models';
import { UserWithResume } from '../users';
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
  apply: Applie;
  vacancy: Vacancy;
};

export type ApplieWithUser = {
  user: UserWithResume;
} & Applie;

export type CreateApply = {
  vacancyId: number;
  cvId: number;
  comment: string;
};
