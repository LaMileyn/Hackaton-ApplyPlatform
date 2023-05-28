import { Question } from '@/app/types/questions';
import { TestWithQuestions } from '@/app/types/tests';
import { useCallback, useState } from 'react';
import { initalQuestionTemplate } from '../store';
import { generateUuid } from '@/app/helpers';
import { generateInitialQuestion, generateInitialVariant } from '../helpers';

type IState = {
  isEditMode: boolean;
  test: TestWithQuestions | undefined;
};
const useTest = (test: TestWithQuestions | undefined) => {
  const [state, setState] = useState<IState>({
    isEditMode: false,
    test,
  });

  const changeEditMode = useCallback((mode: boolean) => {
    setState((prev) => ({ ...prev, isEditMode: mode }));
  }, []);
  const changeTestTitle = useCallback(
    (text: string) => {
      if (!state.test) return;
      const updatedTest: TestWithQuestions = {
        ...state.test,
        title: text,
      };
      setState((prev) => ({ ...prev, test: updatedTest }));
    },
    [state]
  );
  const changeTestDescription = useCallback(
    (text: string) => {
      if (!state.test) return;
      const updatedTest: TestWithQuestions = {
        ...state.test,
        description: text,
      };
      setState((prev) => ({ ...prev, test: updatedTest }));
    },
    [state]
  );
  const changeQuestion = useCallback(
    (updatedQuestion: Question) => {
      if (!state.test) return;
      const updatedQuestions = state.test.questions.map((quest) =>
        quest.ID === updatedQuestion.ID ? updatedQuestion : quest
      );
      const updatedTest = {
        ...state.test,
        questions: updatedQuestions,
      };

      setState((prev) => ({ ...prev, test: updatedTest }));
    },
    [state]
  );

  const addQuestion = useCallback(() => {
    if (!state.test) return;
    const updatedQuestions = [
      ...state.test.questions,
      generateInitialQuestion(),
    ];
    const updatedTest: TestWithQuestions = {
      ...state.test,
      questions: updatedQuestions,
    };
    setState((prev) => ({ ...prev, test: updatedTest }));
  }, [state]);

  const addVariant = useCallback(
    (questionId: number) => {
      if (!state.test) return;
      const updatedQuestions = state.test.questions.map((quest) =>
        quest.ID === questionId
          ? {
              ...quest,
              variants: [...quest.variants, generateInitialVariant()],
            }
          : quest
      );
      const updatedTest: TestWithQuestions = {
        ...state.test,
        questions: updatedQuestions,
      };
      setState((prev) => ({ ...prev, test: updatedTest }));
    },
    [state]
  );

  const deleteQuestion = useCallback(
    (questionId: number) => {
      if (!state.test) return;
      const updatedQuestions = state.test.questions.filter(
        (quest) => quest.ID !== questionId
      );
      const updatedTest: TestWithQuestions = {
        ...state.test,
        questions: updatedQuestions,
      };
      setState((prev) => ({ ...prev, test: updatedTest }));
    },
    [state]
  );

  return {
    changeTestDescription,
    changeTestTitle,
    changeQuestion,
    changeEditMode,
    isEditMode: state.isEditMode,
    testData: state.test,
    addQuestion,
    deleteQuestion,
    addVariant,
  };
};

export default useTest;
