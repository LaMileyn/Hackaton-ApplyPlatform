'use client';

import React, { FC } from 'react';
import { StrokeItemProps } from './types';
import { RiDeleteBin5Line } from 'react-icons/ri';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { useResumeContext } from '@/app/providers/resumeFormProvider/resumeFormProvider';

const StrokeItem: FC<StrokeItemProps> = ({ blockId, stroke }) => {
  const { deleteStroke, updateStroke } = useResumeContext();

  return (
    <li className="mb-4 flex items-start gap-6 justify-between">
      <div className="flex items-start gap-6">
        <div>
          <p>C июля 2021 - по октябрь 2022</p>
        </div>
        <div>
          <div>
            <ContentEditable
              className="mb-1 outline-none editablePlaceholder text-xl font-medium text-primary-500"
              placeholder="Заголовок"
              html={stroke?.title || ''}
              onChange={(e) =>
                updateStroke?.(blockId, stroke.ID, 'title', e.target.value)
              }
            />
          </div>
          <div>
            <ContentEditable
              className="mb-3 font-normal text-system-900 outline-none editablePlaceholder"
              placeholder="Подробно опишите ваши заслуги и достижения в несколько строк"
              html={stroke?.subtitle || ''}
              onChange={(e) =>
                updateStroke?.(blockId, stroke.ID, 'subtitle', e.target.value)
              }
            />
          </div>
          <div>
            <ContentEditable
              className="outline-none text-system-600 editablePlaceholder"
              placeholder="Название блока"
              html={stroke?.description || ''}
              onChange={(e) =>
                updateStroke?.(
                  blockId,
                  stroke.ID,
                  'description',
                  e.target.value
                )
              }
            />
          </div>
        </div>
      </div>
      <RiDeleteBin5Line
        onClick={() => deleteStroke?.(blockId, stroke.ID)}
        className="cursor-pointer"
        color="gray"
        size={24}
      />
    </li>
  );
};

export default StrokeItem;
