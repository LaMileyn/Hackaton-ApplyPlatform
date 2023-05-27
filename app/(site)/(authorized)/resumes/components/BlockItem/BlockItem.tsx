'use client';

import React, { FC } from 'react';
import { BlockItemProps } from './types';
import { Button, Heading } from '@/app/components';
import { IoMdAdd } from 'react-icons/io';
import StrokesList from '../StrokesList/StrokesList';
import ContentEditable from 'react-contenteditable';
import { useResumeContext } from '@/app/providers/resumeFormProvider/resumeFormProvider';

const BlockItem: FC<BlockItemProps> = ({ block }) => {
  const { updateBlock, addStroke } = useResumeContext();
  return (
    <li className="group mb-10">
      <Heading
        title={
          <ContentEditable
            className="outline-none editablePlaceholder"
            placeholder="Название блока"
            html={block?.title || ''}
            onChange={(e) =>
              updateBlock?.({
                ...block,
                title: e.target.value,
              })
            }
          />
        }
        addonAfter={
          <Button
            className="opacity-0 transition group-hover:opacity-100"
            variant="secondary"
            onClick={() => addStroke?.(block.ID)}
            iconLeft={<IoMdAdd />}
          >
            Добавить строку
          </Button>
        }
      />
      <StrokesList strokes={block.strokes} blockId={block.ID} />
    </li>
  );
};

export default BlockItem;
