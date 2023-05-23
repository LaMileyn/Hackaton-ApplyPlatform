import { SideBar } from '@/app/components';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function AuthorizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">{children}</div>
    </div>
  );
}
