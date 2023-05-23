'use client';

import React, { FC, useCallback, useState } from 'react';
import { BlockListProps } from './types';
import BlockItem from '../BlockItem';
import { initialBlock, initialStroke } from '../ResumeBody/store';
import { Button } from '@/app/components';
import { IoMdAdd } from 'react-icons/io';

const BlocksList: FC<BlockListProps> = ({ blocks: initialBlocks }) => {
  const [blocks, setBlocks] = useState(initialBlocks);

  const handleAddBlock = useCallback(() => {
    console.log('add new one');
    setBlocks((prev) => [...prev, initialBlock]);
  }, []);
  const handleRemoveBlock = useCallback((blockId: string) => {
    setBlocks((prevBlocks) =>
      prevBlocks.filter((prevBlock) => prevBlock.id !== blockId)
    );
  }, []);

  const handleAddStroke = useCallback((blockId: string) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((prevBlock) =>
        prevBlock.id === blockId
          ? { ...prevBlock, strokes: [...prevBlock.strokes, initialStroke] }
          : prevBlock
      )
    );
  }, []);
  const handleRemoveStroke = useCallback(
    (blockId: string, strokeId: string) => {
      setBlocks((prevBlocks) =>
        prevBlocks
          .map((prevBlock) => {
            if (prevBlock.id !== blockId) {
              return prevBlock;
            }
            const newStrokes = prevBlock.strokes.filter(
              (stroke) => stroke.id !== strokeId
            );

            return { ...prevBlock, strokes: newStrokes };
          })
          .filter((block) => block.strokes.length > 0)
      );
    },
    []
  );

  return (
    <>
      <ul>
        {blocks.map((block) => (
          <BlockItem
            key={block.id}
            block={block}
            addStroke={handleAddStroke}
            removeStroke={handleRemoveStroke}
          />
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
