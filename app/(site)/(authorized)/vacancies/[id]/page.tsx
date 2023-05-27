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
import { vacanciesService } from '@/app/services';
import { EUserRole } from '@/app/types/users';
import { useQuery } from '@tanstack/react-query';
import { useRouter, useParams } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';
import useEditableVacancy from './hooks/useEditableVacancy';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { EVacancyStatus, VacancyWithTemplates } from '@/app/types/vacancies';
import VacancyBlockList from './components/VacancyBlocksList/VacancyBlockList';

const mock: VacancyWithTemplates = {
  company: 'Совкомбанк Лизинг',
  id: 1,
  status: EVacancyStatus.INTERVIEW,
  templates: [
    {
      id: 1,
      description:
        'Новосибирск • Информационные технологии, интернет, телеком • 3-5 лет • Удаленная работа',
      title: 'Проектыff',
    },
    {
      id: 2,
      description:
        'Новосибирск • Информационные технологии, интернет, телеком • 3-5 лет • Удаленная работа',
      title: 'Проекты',
    },
    {
      id: 3,
      description:
        'Новосибирск • Информационные технологии, интернет, телеком • 3-5 лет • Удаленная работа',
      title: 'Cтек',
    },
    {
      id: 4,
      description:
        'Новосибирск • Информационные технологии, интернет, телеком • 3-5 лет • Удаленная работа',
      title: 'Что мы ждем',
    },
  ],
  title: 'Middle IOS Developer',
  description:
    'Новосибирск • Информационные технологии, интернет, телеком • 3-5 лет • Удаленная работа',
};
const VacanciesPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const user = useUser();

  const isRecruter = user?.role === EUserRole.RECRUTER;

  const { data } = useQuery(['vacancy', id], () =>
    vacanciesService.getVacancy(+id)
  );

  const {
    data: vacancyData,
    isEditing,
    updateBlock,
    updateDescription,
    updateTitle,
    addBlock,
    deleteBlock,
    cancelChanges,
    setEditMode,
  } = useEditableVacancy(mock);
  // const { data: isApplied } = useQuery(['vacancy', id], () =>
  //   vacanciesService.checkApplyButtonStatus(+id)
  // );

  const isApplied = false;

  const handleTitleUpdate = (ev: ContentEditableEvent) => {
    updateTitle(ev.target.value);
  };
  const handleDescUpdate = (ev: ContentEditableEvent) => {
    updateDescription(ev.target.value);
  };

  return (
    <Container>
      <div className="mb-4">
        <Button
          variant="transparent"
          iconLeft={<IoIosArrowBack />}
          onClick={() => router.back()}
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
            {vacancyData?.company}
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
        <div>
          <div className="flex gap-2">
            {isRecruter && !isEditing && (
              <>
                <Button variant="secondary" onClick={() => setEditMode(true)}>
                  Редактировать
                </Button>
                <Button
                  onClick={() =>
                    router.push(`${VACANCIES_ROUTE}/${3}/candidates`)
                  }
                >
                  Кандидаты
                </Button>
              </>
            )}
            {isRecruter && isEditing && (
              <>
                <Button variant="secondary" onClick={() => cancelChanges()}>
                  Отмена
                </Button>
                <Button>Сохранить</Button>
              </>
            )}
            {!isRecruter &&
              (!isApplied ? (
                <Button variant="secondary">Вы откликнулись</Button>
              ) : (
                <Button>Откликнуться</Button>
              ))}
          </div>
        </div>
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

export default VacanciesPage;
