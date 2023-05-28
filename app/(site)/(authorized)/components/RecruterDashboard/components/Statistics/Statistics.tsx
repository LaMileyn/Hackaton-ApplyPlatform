'use client';

import React, { FC } from 'react';
import StatisticsItem from '../StatisticsItem/StatisticsItem';

const Statistics: FC = () => {
  return (
    <div>
      <div className="grid grid-col-3 gap-2">
        <StatisticsItem count={23} text="Отклика в среднем" />
        <StatisticsItem count={9} text="Тестов проведено" />
        <StatisticsItem count={14} text="Звонков проведено" />
        <StatisticsItem count={276} text="Всего откликов" />
        <StatisticsItem count={4} text="Этапа в среднем" />
        <StatisticsItem count={52} text="Этапов всего" />
      </div>
    </div>
  );
};

export default Statistics;
