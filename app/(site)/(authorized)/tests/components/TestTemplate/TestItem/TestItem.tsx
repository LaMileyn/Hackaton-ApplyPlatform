'use client';

import React, { FC } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { TestItemProps } from './types';
import { Button } from '@/app/components';
import { RiDeleteBin5Line } from 'react-icons/ri';

const TestItem: FC<TestItemProps> = ({
  question,
  addVariant,
  changeQuestion,
  deleteQuestion,
  isEditMode,
}) => {
  return (
    <div className="p-7 rounded-md bg-system-100 mb-3">
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
          disabled={false}
        />
        <RiDeleteBin5Line
          onClick={() => deleteQuestion(question.ID)}
          className="cursor-pointer"
          color="gray"
          size={24}
        />
      </div>
      <div className="mb-4">
        {question.variants.map((variant) => (
          <div className="mb-3 flex items-center gap-2">
            <input type="radio" name={variant.text} />
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
              disabled={false}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-10">
        <Button onClick={() => addVariant(question.ID)}>Добавить ответ</Button>
        <p className="text-sm text-system-600">Выберите верный ответ</p>
      </div>
    </div>
  );
};

export default TestItem;
