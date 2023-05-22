import React from 'react';
import { IconType } from 'react-icons';

export type Route = {
  label: string;
  link: string;
  Icon: IconType;
  isActive?: boolean;
  onClick?: () => void;
};
