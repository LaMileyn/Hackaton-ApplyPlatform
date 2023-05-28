'use client';

import {
  Button,
  Container,
  Heading,
  HorisontalAdd,
  Status,
} from '@/app/components';
import { VACANCIES_ROUTE } from '@/app/const/appRoutes';
import useUser from '@/app/hooks/useUser/useUser';
import { EUserRole } from '@/app/types/users';
import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';
import useEditableVacancy from './../hooks/useEditableVacancy';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import VacancyBlockList from './../VacancyBlocksList';
import { mockTemplates } from './store';
import { FC, useEffect, useState } from 'react';
import { VacancyTemplateProps } from './types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { appliesService, vacanciesService } from '@/app/services';
import { RiDeleteBack2Fill, RiDeleteBin2Fill } from 'react-icons/ri';
import ChooseResumeModal from '../../[id]/components/ChooseResumeModal/ChooseResumeModal';

const VacanciesTemplate: FC<VacancyTemplateProps> = ({ ID }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const user = useUser();

  const isRecruter = user?.role === EUserRole.RECRUTER;

  const { data } = useQuery(
    ['vacancy', ID],
    () => vacanciesService.getVacancy(ID as any),
    {
      enabled: !!ID,
    }
  );
  const { data: status, refetch } = useQuery(
    ['vacancy status', ID],
    () => vacanciesService.checkApplyButtonStatus(ID as any),
    {
      enabled: !!ID,
    }
  );

  const { mutate: apply } = useMutation(appliesService.applyToVacancy, {
    onMutate: (newStatus) => {
      queryClient.setQueryData(['vacancy status', ID], true);
    },
    onError: async () => {
      queryClient.setQueryData(['vacancy status', ID], false);
    },
  });

  const {
    data: vacancyData,
    isEditing,
    updateBlock,
    updateDescription,
    updateTitle,
    addBlock,
    deleteBlock,
    cancelChanges,
    updateCompany,
    setEditMode,
    createVacancy,
    updateVacancy,
  } = useEditableVacancy(ID ? data : mockTemplates);

  useEffect(() => {
    if (!ID) {
      setEditMode(true);
    }
  }, [ID]);

  const handleCancel = () => {
    if (ID) {
      cancelChanges();
    } else {
      router.push(VACANCIES_ROUTE);
    }
  };

  const handleSaveCreateClick = () => {
    if (ID) {
      updateVacancy();
    } else {
      createVacancy();
    }
  };

  const topButtons = (
    <div className="flex gap-2">
      {isRecruter && !isEditing && (
        <>
          <Button variant="secondary" onClick={() => setEditMode(true)}>
            Редактировать
          </Button>
          <Button
            onClick={() => router.push(`${VACANCIES_ROUTE}/${ID}/candidates`)}
          >
            Кандидаты
          </Button>
        </>
      )}
      {isRecruter && isEditing && (
        <>
          {!!ID && (
            <Button
              variant="secondary"
              iconLeft={<RiDeleteBin2Fill color="#DA5155" />}
            />
          )}
          <Button variant="secondary" onClick={handleCancel}>
            Отмена
          </Button>
          <Button onClick={handleSaveCreateClick}>
            {ID ? 'Сохранить' : 'Создать'}
          </Button>
        </>
      )}
      {!isRecruter &&
        (status?.applied ? (
          <Button variant="secondary">Вы откликнулись</Button>
        ) : (
          <Button onClick={() => setIsOpenModal(true)}>Откликнуться</Button>
        ))}
    </div>
  );

  const handleTitleUpdate = (ev: ContentEditableEvent) => {
    updateTitle(ev.target.value);
  };
  const handleDescUpdate = (ev: ContentEditableEvent) => {
    updateDescription(ev.target.value);
  };
  const handleCompanyUpdate = (ev: ContentEditableEvent) => {
    updateCompany(ev.target.value);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Container>
      <ChooseResumeModal
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        vacancyId={vacancyData?.ID}
      />
      <div className="mb-4">
        <Button
          variant="transparent"
          iconLeft={<IoIosArrowBack />}
          onClick={() => router.push(VACANCIES_ROUTE)}
        >
          Все вакансии
        </Button>
      </div>
      <div className="flex item-start justify-between mb-4">
        <div>
          <h1 className="text-4xl text-primary-500">
            <ContentEditable
              className="outline-none editablePlaceholder"
              placeholder="Название вакансии"
              html={vacancyData?.title || ''}
              onChange={handleTitleUpdate}
              disabled={!isEditing}
            />
          </h1>
          <div className="mt-3 text-lg text-system-900 font-medium">
            <ContentEditable
              className="outline-none editablePlaceholder"
              placeholder="Компания"
              html={vacancyData?.company || ''}
              onChange={handleCompanyUpdate}
              disabled={!isEditing}
            />
          </div>
          <p className="text-lg text-system-600 mt-2">
            <ContentEditable
              className="outline-none editablePlaceholder"
              placeholder="Описание вакансии: место, подразделение, тип занятости и требуемый опыт"
              html={vacancyData?.description || ''}
              onChange={handleDescUpdate}
              disabled={!isEditing}
            />
          </p>
        </div>
        <div>{topButtons}</div>
      </div>
      {isRecruter && (
        <div className="mt-10 flex gap-4">
          <Status text="Собеседования" variant="success" />
          <p className="text-base text-system-600">
            Статус и заказчик не отображается соискателям
          </p>
        </div>
      )}
      <VacancyBlockList
        templates={vacancyData?.templates || []}
        deleteBlock={deleteBlock}
        updateBlock={updateBlock}
        isEditMode={isEditing}
      />
      {isEditing && (
        <HorisontalAdd btnText="Добавить шаблон" onClick={addBlock} />
      )}
    </Container>
  );
};

export default VacanciesTemplate;
