'use client';

import { forwardRef, useState } from 'react';
import { Option, OptionValue, SelectProps } from './types';
import { useClickOutside } from '@/app/hooks';
import { RiArrowDownSLine } from 'react-icons/ri';
import cn from 'classnames';
import OptionItem from './components/Option/Option';

function Select<T extends OptionValue>(props: SelectProps<T>) {
  const { onChange, options, selected, placeholder, label } = props;

  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const handleOptionClick = (value: Option<T>['value']) => {
    setIsOpen(false);
    onChange(value);
  };

  const handleContainerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="text-system-900 mb-1">{label}</div>
      <div
        ref={ref}
        onClick={handleContainerClick}
        className="
    rounded
    bg-system-100
    px-3
    py-5
    border-2
    relative
    flex items-center
    justify-between
    border-system-300-b
  "
      >
        <div className="text-sm text-system-600">
          {selected?.title ?? placeholder}
        </div>
        <div className={cn('transition ml-1', isOpen && 'rotate-180')}>
          <RiArrowDownSLine />
        </div>

        {isOpen && (
          <ul
            className="
        absolute rounded p-2 top-full left-0 
        bg-system-100 mt-2 w-full z-50 shadow-md"
          >
            {options.map((option) => (
              <OptionItem option={option} onClick={handleOptionClick} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Select;
