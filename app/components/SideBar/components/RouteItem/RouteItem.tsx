import React, { FC } from 'react';
import { RouteItemProps } from './types';
import Link from 'next/link';

const RouteItem: FC<RouteItemProps> = ({
  route: { Icon, label, link, isActive, onClick },
}) => {
  return (
    <li className="mb-[24px] last:mb-0 font-normal text-system-600 text-[20px] cursor-pointer hover:text-primary-500">
      <Link className="flex gap-[17px] items-center" href={link}>
        <Icon className="w-[20px] h-[20px]" />
        {label}
      </Link>
    </li>
  );
};

export default RouteItem;
