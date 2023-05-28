'use client';

import React, { FC, memo, useMemo, useState } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { TestItemProps } from './types';
import { Button, Select } from '@/app/components';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Option } from '@/app/components/Select/types';
import useUser from '@/app/hooks/useUser/useUser';
import { EUserRole } from '@/app/types/users';

const TestItem: FC<TestItemProps> = ({
  question,
  addVariant,
  changeQuestion,
  deleteQuestion,
  isEditMode,
}) => {
  const user = useUser();
  const isRoleCandidate = user?.role === EUserRole.CANDIDATE;

  const handleChangeRadio = (i: number) => {
    if (!isRoleCandidate && isEditMode) {
      changeQuestion({
        ...question,
        answer: i,
      });
    }
  };
  return (
    <div className="p-7 rounded-md bg-system-100 mb-3 group">
      <div className="mb-4 flex items-center justify-between">
        <ContentEditable
          className="outline-none editablePlaceholder text-xl font-medium text-primary-500"
          placeholder="Название вопроса"
          html={question.title || ''}
          onChange={(e) =>
            changeQuestion({
              ...question,
              title: e.target.value,
            })
          }
          disabled={!isEditMode}
        />
        {isEditMode && (
          <RiDeleteBin5Line
            onClick={() => deleteQuestion(question.ID)}
            className="cursor-pointer group-hover:opacity-100 transition opacity-0"
            color="gray"
            size={24}
          />
        )}
      </div>
      <div className="mb-4">
        {question.variants.map((variant, i) => (
          <div className="mb-3 flex items-center gap-2" key={variant.ID}>
            <input
              type="radio"
              name={question.title}
              disabled={!isEditMode && !isRoleCandidate}
              checked={i === question.answer}
              onChange={() => handleChangeRadio(i)}
            />
            <ContentEditable
              className="outline-none editablePlaceholder text-base text-system-900"
              placeholder="Вариант ответа"
              html={variant.text || ''}
              onChange={(e) =>
                changeQuestion({
                  ...question,
                  variants: question.variants.map((currVar) =>
                    currVar.ID === variant.ID
                      ? {
                          ...currVar,
                          text: e.target.value,
                        }
                      : currVar
                  ),
                })
              }
              disabled={!isEditMode}
            />
          </div>
        ))}
      </div>
      {isEditMode && (
        <div className="flex items-center gap-2 mt-10">
          <Button onClick={() => addVariant(question.ID)}>
            Добавить ответ
          </Button>
          <p className="text-sm text-system-600">Выберите верный ответ</p>
        </div>
      )}
    </div>
  );
};

export default memo(TestItem);
