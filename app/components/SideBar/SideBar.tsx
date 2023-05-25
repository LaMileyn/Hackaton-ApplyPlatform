'use client';

import Image from 'next/image';
import React, { FC } from 'react';
import RouteItem from './components/RouteItem';
import RoutesList from './components/RoutesList';
import useRoutes from '@/app/hooks/useRoutes/useRoutes';

const SideBar: FC = () => {
  const { bottomRoutes, mainRoutes } = useRoutes();
  return (
    <aside
      className="h-screen 
    bg-system-100 w-[280px] 
    py-[60px] px-[30px] 
    flex flex-col justify-between"
    >
      <div>
        <Image src="/images/logo.svg" alt="logotype" width={220} height={28} />
        <nav className="mt-[60px]">
          <RoutesList routes={mainRoutes} />
        </nav>
      </div>
      <nav>
        <RoutesList routes={bottomRoutes} />
      </nav>
    </aside>
  );
};

export default SideBar;
