'use client';

import { Status, TextLink } from '@/app/components';
import React, { FC } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { UsersTableProps } from './types';
import { RESUMES_ROUTE } from '@/app/const/appRoutes';

const UsersTable: FC<UsersTableProps> = ({ data, setApplyId }) => {
  return (
    <div className="mt-7 bg-system-100 rounded-lg">
      <table className="w-full">
        <thead className="border-b-2 border-system-300-b">
          <tr>
            <th className="py-4 px-7 text-left">Фамилия и имя</th>
            <th className="py-4 px-7 text-left">E-mail</th>
            <th className="py-4 px-7 text-left">Телефон</th>
            <th className="py-4 px-7 text-left">Резюме</th>
            <th className="py-4 px-7 text-left">Статус</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <div className="text-center w-full py-10">No data found</div>
          )}
          {data?.map((apply, i) => (
            <tr
              key={apply.ID}
              className="hover:bg-system-300 cursor-pointer"
              onClick={() => setApplyId(apply.ID)}
            >
              <td className="py-3 px-7">{apply.cv.user.fullName}</td>
              <td className="py-3 px-7">
                <TextLink text="Связаться" href="/" hovered={true} />
              </td>
              <td className="py-3 px-7">+7-912-345 67-89</td>
              <td className="py-3 px-7">
                <TextLink
                  text="Открыть"
                  href={RESUMES_ROUTE + '/' + apply.cv.ID}
                  hovered={true}
                />
              </td>
              <td className="py-3 px-7">
                <div className="flex items-center justify-between w-full mx-w-[150px]">
                  <Status text="Собеседование" variant="primary" />
                  <IoIosArrowForward />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
