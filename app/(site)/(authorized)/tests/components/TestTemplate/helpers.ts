import { generateUuid } from '@/app/helpers';

export const generateInitialVariant = () => {
  return { ID: generateUuid(), text: '' };
};

export const generateInitialQuestion = () => {
  return {
    ID: generateUuid(),
    answer: 0,
    title: '',
    variants: [generateInitialVariant()],
  };
};

export const generateInitialTest = () => {
  return {
    ID: generateUuid(),
    questions: [generateInitialQuestion()],
    title: '',
    description: '',
  };
};
