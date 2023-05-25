'use client';

import React, { FC, useCallback } from 'react';
import { AppliesListProps } from './types';
import VacancyItem from '@/app/components/VacancyItem/VacancyItem';

const AppliesList: FC<AppliesListProps> = ({ applies, openInfoBar }) => {
  const handleInfoBarOpen = useCallback(() => {
    openInfoBar(true);
  }, []);

  return (
    <ul>
      {applies.map((applie) => (
        <VacancyItem
          onClick={handleInfoBarOpen}
          key={applie.id}
          company="Совккомбанк"
          description="Увидение того самого"
          title="MiddleFrontendEngeniier"
          isCandidate={true}
          vacancieType="apply"
          status="Отклонено"
        />
      ))}
    </ul>
  );
};

export default AppliesList;
