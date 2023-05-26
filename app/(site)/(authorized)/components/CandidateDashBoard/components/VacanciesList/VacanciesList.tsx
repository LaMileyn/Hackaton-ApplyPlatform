'use client';

import VacancyItem from '@/app/components/VacancyItem/VacancyItem';
import React, { FC } from 'react';

const VacanciesList: FC = () => {
  return (
    <ul>
      {[...Array(5)].map((vacancy, i) => (
        <VacancyItem
          key={i}
          company="Vkontakte"
          isCandidate={true}
          title="Middle IOS Разработчик"
          vacancieType="vacancy"
          description="Lorem Ipsum d is a fish and therefore Lorem Ipsum d is a fish and therefore"
        />
      ))}
    </ul>
  );
};

export default VacanciesList;
