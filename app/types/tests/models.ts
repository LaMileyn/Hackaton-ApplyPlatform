import { BaseModel } from '../common/models';
import { Question } from '../questions';

export type Test = {
  title: string;
  description?: string;
} & BaseModel;

export type TestWithQuestions = {
  questions: Question[];
} & Test;
