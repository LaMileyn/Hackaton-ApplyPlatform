import { VACANCIES_ROUTE } from '@/app/const/appRoutes';
import { vacanciesService } from '@/app/services';
import {
  VacancyInfoBlock,
  VacancyTemplate,
  VacancyWithTemplates,
} from '@/app/types/vacancies';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

type hookState = {
  isEditing: boolean;
  vacancy: VacancyWithTemplates | undefined;
};

const useEditableVacancy = (data: VacancyWithTemplates | undefined) => {
  const router = useRouter();
  const [state, setState] = useState<hookState>({
    isEditing: false,
    vacancy: data,
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, vacancy: data }));
  }, [data]);

  const { mutate: createVacancy } = useMutation(
    vacanciesService.createVacancy,
    {
      onSuccess: (data) => {
        router.push(`${VACANCIES_ROUTE}/${data.id}`);
      },
    }
  );

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

  //TODO сделать общую функию для title,company,...

  const handleUpdateCompany = useCallback(
    (newCompany: string) => {
      if (!state.vacancy) return;
      const updatedVacancy = {
        ...state.vacancy,
        company: newCompany,
      };
      setState((prevState) => ({ ...prevState, vacancy: updatedVacancy }));
    },
    [state]
  );

  const handleVacancyCreate = useCallback(() => {
    if (!state.vacancy) return;
    createVacancy(state.vacancy);
  }, [state]);

  const cancelChanges = useCallback(() => {
    setState((prev) => ({
      vacancy: data,
      isEditing: false,
    }));
  }, []);

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

  console.log(state);

  return {
    updateTitle: handleUpdateTitle,
    updateDescription: handleUpdateDescription,
    updateBlock: handleUpdateTemplate,
    updateCompany: handleUpdateCompany,
    addBlock: handleAddTemplate,
    deleteBlock: handleDeleteTemplate,
    isEditing: state.isEditing,
    createVacancy: handleVacancyCreate,
    data: state.vacancy,
    cancelChanges,
    setEditMode,
  };
};

export default useEditableVacancy;
