import { BaseModel } from '../common/models';

export type Question = {
  title: string;
  description?: string;
  variants: QuestionVariant[];
  answer: QuestionVariant;
} & BaseModel;

export type QuestionVariant = {
  text: string;
} & BaseModel;
