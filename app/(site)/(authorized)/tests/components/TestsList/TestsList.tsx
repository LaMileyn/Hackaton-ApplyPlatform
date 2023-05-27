'use client';

import { Card } from '@/app/components';
import React, { FC } from 'react';

const TestsList: FC = () => {
  return (
    <div className="flex flex-col gap-1">
      {[...Array(10)].map((test, i) => (
        <Card
          key={i}
          title="Технический тест для Junior Frontend-разработчика"
          isCandidate={true}
          description="Swift — наш любимый язык мобильной разработки. Он простой, наглядный, простой в изучении, но, в тоже время, мощный, функциональный и дающий много возможностей разработчикам. Насколько хорошо вы знаете Swift?"
        />
      ))}
    </div>
  );
};

export default TestsList;
