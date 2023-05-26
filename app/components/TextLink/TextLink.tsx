'use client';

import Link from 'next/link';
import React, { FC } from 'react';
import cn from 'classnames';
import { TextLinkProps } from './types';

const TextLink: FC<TextLinkProps> = ({ href, className, hovered, text }) => {
  return (
    <Link
      className={cn(
        className,
        'text-primary-300',
        hovered && 'hover:underline'
      )}
      href={'/'}
    >
      {text}
    </Link>
  );
};

export default TextLink;
