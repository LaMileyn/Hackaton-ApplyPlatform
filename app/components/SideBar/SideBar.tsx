'use client';

import Image from 'next/image';
import React, { FC } from 'react';
import { mainRoutes, extraRoutes } from './store';
import RouteItem from './components/RouteItem';
import RoutesList from './components/RoutesList';

const SideBar: FC = () => {
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
        <RoutesList routes={extraRoutes} />
      </nav>
    </aside>
  );
};

export default SideBar;
