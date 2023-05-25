'use client';

import React, { forwardRef } from 'react';
import { FormInputProps } from './types';
import cn from 'classnames';

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ error, ...props }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          {...props}
          className={cn(
            `
         appearance-none
         py-4
         px-3
         rounded 
         leading-tight 
         focus:outline-none 
         mb-3
         w-full
         border
         text-base
         placeholder: text-system-600
        `,
            error ? 'border-secondary-500' : 'border-system-300-b'
          )}
        />
        {error && (
          <p className="text-secondary-500 text-xs italic mt-2">
            {error.message}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'Input';

export default FormInput;
