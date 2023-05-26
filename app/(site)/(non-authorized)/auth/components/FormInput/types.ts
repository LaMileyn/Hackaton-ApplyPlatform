import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export type FormInputProps = {
  error?: FieldError;
} & InputHTMLAttributes<HTMLInputElement>;
