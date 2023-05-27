import { generateUuid } from '@/app/helpers';
import {
  VacancyInfoBlock,
  VacancyTemplate,
  VacancyWithTemplates,
} from '@/app/types/vacancies';
import { useCallback, useState } from 'react';

type hookState = {
  isEditing: boolean;
  vacancy: VacancyWithTemplates | undefined;
};

const useEditableVacancy = (data: VacancyWithTemplates | undefined) => {
  const [state, setState] = useState<hookState>({
    isEditing: false,
    vacancy: data,
  });

  const handleUpdateTitle = useCallback(
    (title: string) => {
      if (!state.vacancy) return;
      const updatedVacancy = {
        ...state.vacancy,
        title,
      };
      console.log(updatedVacancy);
      setState((prevState) => ({ ...prevState, vacancy: updatedVacancy }));
    },
    [state]
  );

  const cancelChanges = useCallback(() => {
    setState((prev) => ({
      ...prev,
      vacancy: data,
    }));
  }, []);

  const handleUpdateDescription = useCallback(
    (newDesc: string) => {
      if (!state.vacancy) return;
      const updatedVacancy = {
        ...state.vacancy,
        description: newDesc,
      };
      setState((prevState) => ({ ...prevState, vacancy: updatedVacancy }));
    },
    [state]
  );

  const handleUpdateTemplate = useCallback(
    (block: VacancyTemplate) => {
      if (!state.vacancy) return;

      const updatedTemplates = state.vacancy?.templates.map((template) =>
        template.id === block.id ? block : template
      );

      const updatedVacancy = {
        ...state.vacancy,
        templates: updatedTemplates,
      };

      setState((prevState) => ({ ...prevState, vacancy: updatedVacancy }));
    },
    [state]
  );

  const handleDeleteTemplate = useCallback(
    (id: number) => {
      if (!state.vacancy) return;
      const newTemplates = state.vacancy?.templates.filter(
        (template) => template.id !== id
      );
      const updatedVacancy = {
        ...state.vacancy,
        templates: newTemplates,
      };
      setState((prevState) => ({ ...prevState, vacancy: updatedVacancy }));
    },
    [state]
  );

  const handleAddTemplate = useCallback(() => {
    if (!state.vacancy) return;
    if (state.vacancy.templates) {
      const newTemplates = [
        ...state.vacancy.templates,
        {
          description: '',
          id: new Date().valueOf(),
          title: '',
        },
      ];
      const updatedVacancy = {
        ...state.vacancy,
        templates: newTemplates,
      };
      setState((prevState) => ({ ...prevState, vacancy: updatedVacancy }));
    }
  }, [state]);

  const setEditMode = useCallback((mode: boolean) => {
    setState((prev) => ({ ...prev, isEditing: mode }));
  }, []);

  return {
    updateTitle: handleUpdateTitle,
    updateDescription: handleUpdateDescription,
    updateBlock: handleUpdateTemplate,
    addBlock: handleAddTemplate,
    deleteBlock: handleDeleteTemplate,
    isEditing: state.isEditing,
    data: state.vacancy,
    cancelChanges,
    setEditMode,
  };
};

export default useEditableVacancy;
