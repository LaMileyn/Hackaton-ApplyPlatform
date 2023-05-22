import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: ButtonVariant;
  danger?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
};

export type ButtonVariant = 'secondary' | 'transparent' | 'primary';
