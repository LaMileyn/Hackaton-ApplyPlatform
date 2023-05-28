import { BaseModel } from '../common/models';
import { ResumeWithUser } from '../resumes';
import { Stage } from '../stages';
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
  apply: ApplieWithCV;
  vacancy: Vacancy;
};

export type CreateApply = {
  vacancyId: number;
  cvId: number;
  comment: string;
};

export type ApplyWithStages = {
  stages: Stage[]
} & ApplieWithCV

export type ApplieWithCV = {
  cv: ResumeWithUser;
} & Applie;

export type AppliesWithVacancy = {
  applies: ApplieWithCV[];
  vacancy: Vacancy;
};
