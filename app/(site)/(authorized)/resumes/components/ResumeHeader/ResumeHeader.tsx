'use client';

import { Button } from '@/app/components';
import React, { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { ResumeHeaderProps } from './types';
import { useParams, useRouter } from 'next/navigation';
import ContentEditable from 'react-contenteditable';
import useUser from '@/app/hooks/useUser/useUser';
import { useResumeContext } from '@/app/providers/resumeFormProvider/resumeFormProvider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PROFILE_ROUTE, RESUMES_ROUTE } from '@/app/const/appRoutes';
import resumersService from '@/app/services/resumes/resumersService';

const ResumeHeader: FC<ResumeHeaderProps> = () => {
  const { resumeId } = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const user = useUser();

  const { resume, updateTitle, isEditing, setEditMode } = useResumeContext();

  const { mutate: createResume } = useMutation(resumersService.createResume, {
    onSuccess: (resume) => {
      router.push(RESUMES_ROUTE + '/' + resume.ID);
      setEditMode?.(false);
    },
  });
  const { mutate: updateResume } = useMutation(resumersService.updateResume, {
    onSuccess: (resume) => {
      queryClient.invalidateQueries(['resume', resume.ID]);
      setEditMode?.(false);
    },
  });

  const { mutate: deleteResume } = useMutation(resumersService.deleteResume, {
    onSuccess: (resume) => {
      queryClient.invalidateQueries(['resumes']);
      router.push(PROFILE_ROUTE);
      setEditMode?.(false);
    },
  });

  const handleSubmit = () => {
    if (!resumeId) {
      resume && createResume(resume);
    } else {
      if (!isEditing) return setEditMode?.(true);
      console.log(resume);
      resume && updateResume(resume);
    }
  };

  const handleDeleteResume = () => {
    resume && deleteResume(resume.ID);
  };

  return (
    <div>
      <div className="mb-4">
        <Button
          onClick={() => router.push(PROFILE_ROUTE)}
          iconLeft={<IoIosArrowBack />}
          variant="transparent"
        >
          Назад
        </Button>
      </div>
      <div className="mb-7 flex items-start">
        <div className="flex-grow">
          <div className="flex gap-7">
            <div className="w-[200px] rounded aspect-square bg-system-300" />
            <div>
              <div className="mb-3 text-primary-500 text-4xl">
                <ContentEditable
                  className="outline-none editablePlaceholder"
                  placeholder="Должность"
                  disabled={!isEditing}
                  html={resume?.title || ''}
                  onChange={(e) => updateTitle?.(e.target.value)}
                />
              </div>
              <div className="mb-3 text-system-900 text-xl">
                {user?.fullName}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {resumeId && isEditing && (
            <Button variant="secondary" onClick={() => setEditMode?.(false)}>
              Отменить
            </Button>
          )}
          {resumeId && !isEditing && (
            <Button variant="secondary" onClick={handleDeleteResume}>
              Удалить
            </Button>
          )}
          <Button onClick={handleSubmit}>
            {resumeId
              ? isEditing
                ? 'Сохранить'
                : 'Редактировать'
              : 'Создать резюме'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
