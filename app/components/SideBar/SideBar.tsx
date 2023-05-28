'use client';

import Image from 'next/image';
import React, { FC, useEffect } from 'react';
import RoutesList from './components/RoutesList';
import useRoutes from '@/app/hooks/useRoutes/useRoutes';
import useUser from '@/app/hooks/useUser/useUser';
import { useRouter } from 'next/navigation';
import { AUTH_ROUTE } from '@/app/const/appRoutes';

const SideBar: FC = () => {
  const user = useUser();
  const router = useRouter();
  const { bottomRoutes, mainRoutes } = useRoutes();

  useEffect(() => {
    if (!user) router.push(AUTH_ROUTE);
  }, [user]);

  return (
    <aside
      className="h-screen 
    bg-system-100 w-[280px] 
    fixed
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
