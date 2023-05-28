'use client';

import { ClientOnly, SideBar } from '@/app/components';
import { AUTH_ROUTE } from '@/app/const/appRoutes';
import useUser from '@/app/hooks/useUser/useUser';
import { useRouter } from 'next/navigation';

export default function AuthorizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex relative">
      <ClientOnly>
        <SideBar />
      </ClientOnly>
      <div className="w-full ml-[280px]">{children}</div>
    </div>
  );
}
