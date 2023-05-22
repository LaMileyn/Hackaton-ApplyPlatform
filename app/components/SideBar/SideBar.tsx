import Image from 'next/image';
import React, { FC } from 'react';
import { mainRoutes, extraRoutes } from './store';
import RouteItem from './components/RouteItem/RouteItem';

const SideBar: FC = () => {
  return (
    <aside
      className="h-screen 
    bg-system-100 md:w-[280px] 
    py-[60px] px-[30px] 
    flex flex-col justify-between"
    >
      <div>
        <Image src="/images/logo.svg" alt="logotype" width={220} height={28} />
        <nav className="mt-[60px]">
          <ul>
            {mainRoutes.map((route) => (
              <RouteItem key={route.label} route={route} />
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul>
            {extraRoutes.map((route) => (
              <RouteItem key={route.label} route={route} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
