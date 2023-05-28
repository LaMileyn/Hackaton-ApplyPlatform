import { Question } from '@/app/types/questions';

export type TestItemProps = {
  question: Question;
  addVariant: (questId: number) => void;
  changeQuestion: (question: Question) => void;
  deleteQuestion: (questionId: Question['ID']) => void;
  isEditMode: boolean;
};
