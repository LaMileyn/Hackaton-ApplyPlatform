'use client';

import React, { FC } from 'react';
import { StrokeItemProps } from './types';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TextareaAutosize, TransparentInput } from '@/app/components';

const StrokeItem: FC<StrokeItemProps> = ({ blockId, stroke, removeStroke }) => {
  return (
    <li className="mb-4 flex items-start gap-6 justify-between">
      <div className="flex items-start gap-6">
        <div>
          <p>C июля 2021 - по октябрь 2022</p>
        </div>
        <div>
          <div>
            <TransparentInput
              className="text-primary-500"
              value={stroke.title}
              placeholder="Заголовок"
              onChange={() => {}}
            />
          </div>
          <div>
            <TransparentInput
              value={stroke.subtitle}
              placeholder="Подзаголовок"
              onChange={() => {}}
            />
          </div>
          <div>
            <TextareaAutosize
              value="hello"
              onChange={() => {}}
              placeholder="Введите текст пожалуйста"
            />
          </div>
        </div>
      </div>
      <RiDeleteBin5Line
        onClick={() => removeStroke(blockId, stroke.id)}
        className="cursor-pointer"
        color="gray"
        size={24}
      />
    </li>
  );
};

export default StrokeItem;
