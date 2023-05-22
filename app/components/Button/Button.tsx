import { forwardRef } from 'react';
import { ButtonProps } from './types';
import cn from 'classnames';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      danger,
      disabled,
      fullWidth,
      iconLeft,
      iconRight,
      onClick,
      type,
      variant = 'primary',
      ...props
    },
    ref
  ) => {
    const isPrimary = variant === 'primary';
    const isSecondary = variant === 'secondary';
    const isTransparent = variant === 'transparent';

    return (
      <button
        className={cn(
          className,
          `
            rounded
            flex
            font-semibold
            justify-center
            px-3
            items-center
            py-2
            text-sm
        `,
          fullWidth && 'w-full',
          disabled && 'opacity-50 cursor-default',
          isTransparent && 'border-none bg-none',
          isSecondary &&
            'border-1 border-system-300-b bg-system-200 text-system-600',
          isPrimary && 'bg-secondary-500 text-system-100'
        )}
        ref={ref}
        {...props}
      >
        {iconLeft && (
          <div className="mr-2 grid place-items-center">{iconLeft}</div>
        )}
        {children}
        {iconRight && (
          <div className="ml-2 grid place-items-center">{iconRight}</div>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
