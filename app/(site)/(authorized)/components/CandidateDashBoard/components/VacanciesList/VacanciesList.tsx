'use client';

import { Card } from '@/app/components';
import React, { FC } from 'react';

const VacanciesList: FC = () => {
  return (
    <div>
      {[...Array(5)].map((vacancy, i) => (
        <Card
          key={i}
          company="Vkontakte"
          isCandidate={true}
          title="Middle IOS Разработчик"
          description="Lorem Ipsum d is a fish and therefore Lorem Ipsum d is a fish and therefore"
        />
      ))}
    </div>
  );
};

export default VacanciesList;
