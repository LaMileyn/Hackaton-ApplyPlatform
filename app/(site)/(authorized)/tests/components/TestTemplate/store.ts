import { Question } from '@/app/types/questions';
import { TestWithQuestions } from '@/app/types/tests';
import { generateInitialQuestion, generateInitialTest } from './helpers';

export const initalQuestionTemplate: Question = generateInitialQuestion();

export const initialTestTemplate: TestWithQuestions = generateInitialTest();
