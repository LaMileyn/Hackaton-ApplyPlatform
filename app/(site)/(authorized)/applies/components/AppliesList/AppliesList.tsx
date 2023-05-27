'use client';

import React, { FC, useCallback } from 'react';
import { AppliesListProps } from './types';
import { Card } from '@/app/components';

const AppliesList: FC<AppliesListProps> = ({ applies, openInfoBar }) => {
  const handleInfoBarOpen = useCallback(() => {
    openInfoBar(true);
  }, []);

  return (
    <div>
      {applies.map((applie) => (
        <Card
          onClick={handleInfoBarOpen}
          key={applie.ID}
          company="Совккомбанк"
          description="Увидение того самого"
          title="MiddleFrontendEngeniier"
          isCandidate={true}
          applyStatus={applie.status}
        />
      ))}
    </div>
  );
};

export default AppliesList;
