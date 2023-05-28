'use client';

import { Dialog, Transition } from '@headlessui/react';
import React, { FC, Fragment } from 'react';
import { ChooseResumeModalProps } from './types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { appliesService, resumesService } from '@/app/services';
import { Button } from '@/app/components';

const ChooseResumeModal: FC<ChooseResumeModalProps> = ({
  isOpen,
  setIsOpen,
  vacancyId,
}) => {
  const queryClient = useQueryClient();

  const { data: resumes } = useQuery(['resumes'], () =>
    resumesService.getAllResumes()
  );

  const { mutate } = useMutation(appliesService.applyToVacancy, {
    onSuccess: () => {
      queryClient.invalidateQueries(['vacancy status', vacancyId]);
    },
    onSettled: () => {
      setIsOpen(false);
    },
  });

  const handleApply = (resumeId: number) => {
    if (!vacancyId) return;
    mutate({ vacancyId, cvId: resumeId, comment: 'Я хочу к вам парни!' });
  };
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        className="fixed z-50 inset-0 "
        as="div"
        onClose={() => setIsOpen(false)}
      >
        <div
          className="fixed inset-0 bg-system-900 opacity-30"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="p-8 bg-system-100 shadow-lg rounded-md">
            <Dialog.Title className="text-2xl font-bold mb-4">
              Выберите резюме для отклика:
            </Dialog.Title>
            {resumes?.map((resume) => (
              <div
                key={resume.ID}
                onClick={() => handleApply(resume.ID)}
                className="py-2 px-4 hover:scale-105 transition shadow-sm mb-3 cursor-pointer"
              >
                {resume.title}
              </div>
            ))}
            <div className="flex justify-end mt-4">
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Отмена
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ChooseResumeModal;
