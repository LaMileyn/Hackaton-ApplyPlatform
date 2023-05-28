'use client';

import useUser from '@/app/hooks/useUser/useUser';
import Image from 'next/image';
import React from 'react';

const ProfileHeader = () => {
  const user = useUser();

  return (
    <div className="flex gap-7">
      <div className="w-[200px] rounded aspect-square bg-system-300" />
      <div>
        <div className="mb-3 text-primary-500 text-4xl">IOS Разработчик</div>
        <div className="mb-3 text-system-900 text-xl">{user?.fullName}</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
