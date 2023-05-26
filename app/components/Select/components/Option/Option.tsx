import React from 'react';
import { OptionProps } from './types';
import { OptionValue } from '../../types';

export default function Option<T extends OptionValue>(props: OptionProps<T>) {
  const {
    onClick,
    option: { title, value },
  } = props;
  return (
    <li
      className="py-4 px-4 hover:bg-system-200 text-sm rounded-sm hover:cursor-pointer"
      onClick={() => onClick(value)}
    >
      {title}
    </li>
  );
}
