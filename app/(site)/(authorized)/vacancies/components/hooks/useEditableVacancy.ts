import { VACANCIES_ROUTE } from '@/app/const/appRoutes';
import { vacanciesService } from '@/app/services';
import {
  VacancyInfoBlock,
  VacancyTemplate,
  VacancyWithTemplates,
} from '@/app/types/vacancies';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

type hookState = {
  isEditing: boolean;
  vacancy: VacancyWithTemplates | undefined;
};

const useEditableVacancy = (data: VacancyWithTemplates | undefined) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [state, setState] = useState<hookState>({
    isEditing: false,
    vacancy: data,
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, vacancy: data }));
  }, [data]);

  const { mutate: createVacancy, isLoading: isCreating } = useMutation(
    vacanciesService.createVacancy,
    {
      onSuccess: (data) => {
        router.push(`${VACANCIES_ROUTE}/${data.ID}`);
      },
    }
  );
  const { mutate: updateVacancy, isLoading: isUpdating } = useMutation(
    vacanciesService.updateVacancy,
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(['vacancy', data.ID]);
        setState((prev) => ({ ...prev, isEditing: false }));
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

  const handleVacancyUpdate = useCallback(() => {
    if (!state.vacancy) return;
    updateVacancy(state.vacancy);
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
        template.ID === block.ID ? block : template
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
    (ID: number) => {
      if (!state.vacancy) return;
      const newTemplates = state.vacancy?.templates.filter(
        (template) => template.ID !== ID
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
          ID: new Date().valueOf(),
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
    updateCompany: handleUpdateCompany,
    addBlock: handleAddTemplate,
    deleteBlock: handleDeleteTemplate,
    isEditing: state.isEditing,
    createVacancy: handleVacancyCreate,
    updateVacancy: handleVacancyUpdate,
    data: state.vacancy,
    isDisabled: isCreating || isUpdating,
    cancelChanges,
    setEditMode,
  };
};

export default useEditableVacancy;
