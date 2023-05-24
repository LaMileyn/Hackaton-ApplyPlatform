'use client';

import React, { FC } from 'react';
import { RoutesList } from './types';
import RouteItem from '../RouteItem/RouteItem';

const RoutesList: FC<RoutesList> = ({ routes }) => {
  return (
    <ul>
      {routes.map((route) => (
        <RouteItem key={route.label} route={route} />
      ))}
    </ul>
  );
};

export default RoutesList;
