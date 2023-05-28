import { Question } from '@/app/types/questions';
import { TestWithQuestions } from '@/app/types/tests';

export const initalQuestionTemplate: Question = {
  ID: 1,
  answer: 1,
  title: '',
  variants: [{ ID: 1, text: '' }],
};

export const initialTestTemplate: TestWithQuestions = {
  ID: 1,
  questions: [initalQuestionTemplate],
  title: '',
  description: '',
};
