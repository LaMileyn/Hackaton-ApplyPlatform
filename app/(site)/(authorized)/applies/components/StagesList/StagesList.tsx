'use client';

import { ApplyStage } from '@/app/components';
import React, { FC } from 'react';

const StagesList: FC = () => {
  return (
    <div className="flex gap-2 flex-wrap">
      {[1, 2, 3, 4].map((stage, i) => (
        <ApplyStage key={i} />
      ))}
    </div>
  );
};

export default StagesList;
