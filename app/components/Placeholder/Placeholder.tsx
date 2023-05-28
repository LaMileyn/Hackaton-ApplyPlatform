import React, { FC } from 'react';
import { PlaceholderProps } from './types';

const Placeholder: FC<PlaceholderProps> = ({ text }) => {
  return (
    <div className="py-8">
      <p className="text-system-600 font-medium text-xl">{text}</p>
    </div>
  );
};

export default Placeholder;
