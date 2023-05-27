'use client';

import React, { FC } from 'react';
import { BlockItemProps } from './types';
import { Button, Heading } from '@/app/components';
import { IoMdAdd } from 'react-icons/io';
import StrokesList from '../StrokesList/StrokesList';

const BlockItem: FC<BlockItemProps> = ({ block, removeStroke, addStroke }) => {
  return (
    <li className="group mb-10">
      <Heading
        title={block.title}
        addonAfter={
          <Button
            className="opacity-0 transition group-hover:opacity-100"
            variant="secondary"
            onClick={() => addStroke(block.ID)}
            iconLeft={<IoMdAdd />}
          >
            Добавить строку
          </Button>
        }
      />
      <StrokesList
        strokes={block.strokes}
        removeStroke={removeStroke}
        blockId={block.ID}
      />
    </li>
  );
};

export default BlockItem;
