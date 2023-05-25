'use client';

import Image from 'next/image';
import AuthForm from './components/AuthForm/AuthForm';

export default function Home() {
  return (
    <div className="h-screen grid place-items-center">
      <div className=" bg-system-100 max-w-md w-full py-4 rounded px-3">
        <Image
          className="mt-5 mx-auto"
          src="/images/logo.svg"
          alt="logo"
          width={220}
          height={28}
        />
        <AuthForm />
      </div>
    </div>
  );
}
