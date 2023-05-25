import React, { FC } from 'react';
import { ApplyStageProps } from './types';
import TextLink from '../TextLink';

const ApplyStage: FC<ApplyStageProps> = ({}) => {
  return (
    <div className="flex flex-col bg-system-100 rounded-md p-3 basis-[230px] aspect-square  justify-between">
      <div>
        <div className="flex items-center justify-between">
          <span>1 этап</span>
          <span>23.05.23</span>
        </div>
        <div className="mt-2 text-3xl text-primary-300">Тест</div>
      </div>
      <TextLink text="Начать прохождение" href="/" />
    </div>
  );
};

export default ApplyStage;
