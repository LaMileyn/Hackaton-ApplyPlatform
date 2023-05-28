'use client';

import { ClientOnly, SideBar } from '@/app/components';

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
