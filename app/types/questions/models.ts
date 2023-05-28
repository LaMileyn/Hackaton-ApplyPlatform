import { BaseModel } from '../common/models';

export type Question = {
  title: string;
  description?: string;
  variants: QuestionVariant[];
  answer: number;
} & BaseModel;

export type QuestionVariant = {
  text: string;
} & BaseModel;
