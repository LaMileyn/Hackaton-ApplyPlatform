'use client';

import React, { FC } from 'react';
import { VacancyBlockListProps } from './types';
import { Heading } from '@/app/components';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { RiDeleteBin5Line } from 'react-icons/ri';

const VacancyBlockList: FC<VacancyBlockListProps> = ({
  deleteBlock,
  updateBlock,
  templates,
  isEditMode,
}) => {
  return (
    <div className="mt-10">
      {templates.map((template) => {
        return (
          <div
            key={template.ID}
            className="group flex item-start justify-between mb-10"
          >
            <div>
              <Heading
                title={
                  <ContentEditable
                    placeholder="Заголовок"
                    className="outline-none editablePlaceholder"
                    html={template.title}
                    disabled={!isEditMode}
                    onChange={(e) =>
                      updateBlock({
                        ...template,
                        title: e.target.value,
                      })
                    }
                  />
                }
              />

              <ContentEditable
                className="outline-none editablePlaceholder"
                placeholder="Пункт описания"
                html={template.description}
                disabled={!isEditMode}
                onChange={(e) =>
                  updateBlock({
                    ...template,
                    description: e.target.value,
                  })
                }
              />
            </div>
            {isEditMode && (
              <RiDeleteBin5Line
                onClick={() => deleteBlock(template.ID)}
                className="cursor-pointer group-hover:opacity-100 opacity-0 transition"
                color="gray"
                size={24}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VacancyBlockList;
