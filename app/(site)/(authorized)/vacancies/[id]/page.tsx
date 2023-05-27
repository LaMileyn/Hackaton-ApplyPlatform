'use client';

import { Button, Container, Heading, Status } from '@/app/components';
import { VACANCIES_ROUTE } from '@/app/const/appRoutes';
import useUser from '@/app/hooks/useUser/useUser';
import { vacanciesService } from '@/app/services';
import { EUserRole } from '@/app/types/users';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

const VacanciesPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const user = useUser();

  const isRecruter = user?.role === EUserRole.RECRUTER;
  const isEditMode = false;
  const { data } = useQuery(['vacancy', id], () =>
    vacanciesService.getVacancy(+id)
  );
  const { data: isApplied } = useQuery(['vacancy', id], () =>
    vacanciesService.checkApplyButtonStatus(+id)
  );

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
          <h1 className="text-4xl text-primary-500">Middle iOS разработчик</h1>
          <div className="mt-3 text-lg text-system-900 font-medium">
            Cовкомбанк
          </div>
          <p className="text-lg text-system-600 mt-2">
            Новосибирск • Информационные технологии, интернет, телеком • 3-5 лет
            • Удаленная работа
          </p>
        </div>
        <div>
          <div className="flex gap-2">
            {isRecruter && !isEditMode && (
              <>
                <Button variant="secondary">Редактировать</Button>
                <Button
                  onClick={() =>
                    router.push(`${VACANCIES_ROUTE}/${3}/candidates`)
                  }
                >
                  Кандидаты
                </Button>
              </>
            )}
            {isRecruter && isEditMode && (
              <>
                <Button variant="secondary">Отмена</Button>
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
      <div className="mt-10">
        <Heading title="Проект" />
      </div>
      <div className="mt-10">
        <Heading title="Cтэк" />
      </div>
      <div className="mt-10">
        <Heading title="Что мы ждем" />
      </div>
    </Container>
  );
};

export default VacanciesPage;
