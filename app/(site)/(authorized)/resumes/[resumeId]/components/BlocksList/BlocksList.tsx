'use client';

import React, { FC, useCallback, useState } from 'react';
import { BlockListProps, ResumeStokeKeys } from './types';
import BlockItem from '../BlockItem';
import { initialBlock, initialStroke } from '../ResumeClient/store';
import { Button, HorisontalAdd } from '@/app/components';
import { IoMdAdd } from 'react-icons/io';

const BlocksList: FC<BlockListProps> = ({ blocks: initialBlocks }) => {
  const [blocks, setBlocks] = useState(initialBlocks);

  const handleAddBlock = useCallback(() => {
    setBlocks((prev) => [...prev, initialBlock]);
  }, []);
  const handleRemoveBlock = useCallback((blockId: number) => {
    setBlocks((prevBlocks) =>
      prevBlocks.filter((prevBlock) => prevBlock.id !== blockId)
    );
  }, []);

  const handleAddStroke = useCallback((blockId: number) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((prevBlock) =>
        prevBlock.id === blockId
          ? { ...prevBlock, strokes: [...prevBlock.strokes, initialStroke] }
          : prevBlock
      )
    );
  }, []);

  const handleChangeStrokeData = useCallback(
    (name: ResumeStokeKeys, value: number) => {
      // setBlocks((prevBlocks) => prevBlocks.)
    },
    []
  );

  const handleRemoveStroke = useCallback(
    (blockId: number, strokeId: number) => {
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
      <HorisontalAdd
        btnText="Добавить свободный блок"
        onClick={handleAddBlock}
      />
    </>
  );
};

export default BlocksList;
