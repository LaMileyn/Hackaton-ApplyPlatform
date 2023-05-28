import { Resume } from '../resumes';
import { User } from '../users';
import { Vacancy } from '../vacancies';
import { Applie } from './models';

export type ApplyInfoResponse = {
  apply: Applie;
  cv: Resume;
  user: User;
  vacancy: Vacancy;
};
