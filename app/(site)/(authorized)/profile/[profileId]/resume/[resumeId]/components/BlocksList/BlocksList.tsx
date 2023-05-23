'use client';

import React, { FC, useCallback, useState } from 'react';
import { BlockListProps } from './types';
import BlockItem from '../BlockItem';
import { initialBlock } from '../ResumeBody/store';
import { Button } from '@/app/components';
import { IoMdAdd } from 'react-icons/io';

const BlocksList: FC<BlockListProps> = ({ blocks: initialBlocks }) => {
  const [blocks, setBlocks] = useState(initialBlocks);

  const handleAddBlock = useCallback(() => {
    console.log('add new one');
    setBlocks((prev) => [...prev, initialBlock]);
  }, []);
  const handleRemoveBlock = useCallback((id: string) => {
    setBlocks((prevBlocks) =>
      prevBlocks.filter((prevBlock) => prevBlock.id !== id)
    );
  }, []);

  const handleAddStroke = useCallback(() => {}, []);
  const handleRemoveStroke = useCallback(() => {}, []);

  return (
    <>
      <ul>
        {blocks.map((block) => (
          <BlockItem key={block.id} block={block} />
        ))}
      </ul>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-system-300-b" />
        </div>
        <div className="relative flex justify-center">
          <div className="px-7 bg-system-200">
            <Button
              variant="secondary"
              iconLeft={<IoMdAdd />}
              onClick={handleAddBlock}
            >
              Добавить свободный блок
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlocksList;
