import React, { FC } from 'react';
import { RouteItemProps } from './types';
import Link from 'next/link';
import cn from 'classnames';

const RouteItem: FC<RouteItemProps> = ({
  route: { Icon, label, link, isActive, onClick },
}) => {
  return (
    <li
      className={cn(
        'mb-[24px] last:mb-0 font-normal text-[20px] cursor-pointer hover:text-primary-500',
        isActive ? 'text-primary-500' : 'text-system-600'
      )}
    >
      <div onClick={onClick ?? undefined}>
        <Link className="flex gap-[17px] items-center" href={link}>
          <Icon className="w-[20px] h-[20px]" />
          {label}
        </Link>
      </div>
    </li>
  );
};

export default RouteItem;
