import { BaseModel } from '../common/models';

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

export type CreateUser = Pick<User, 'password' | 'role' | 'email' | 'fullName'>;
export type AuthUser = Pick<User, 'password' | 'email'>;
