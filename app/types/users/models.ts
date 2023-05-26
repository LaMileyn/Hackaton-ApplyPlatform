import { BaseModel } from '../common/models';
import { Resume } from '../resumes';

export enum EUserRole {
  CANDIDATE = 0,
  RECRUTER = 1,
  CUSTOMER = 2,
}

export type User = {
  fullName: string;
  phone: string;
  password: string;
  email: string;
  role: EUserRole;
} & BaseModel;

export type UserWithResume = {
  resume: Resume
} & User;


export type CreateUser = Pick<User, 'password' | 'role' | 'email' | 'fullName'>;
export type AuthUser = Pick<User, 'password' | 'email'>;
