import React, { forwardRef } from 'react';
export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  textarea?: boolean;
  rows?: number;
  error?: string;
  transparent?: boolean;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, textarea, error, transparent, ...props }, ref) => {
    const bg = transparent ? `bg-transparent` : `bg-white`;
    const ring = error
      ? `focus:border-red-500 ring-1 ring-red-500 text-red-400`
      : 'focus:border-primary-500 focus:ring-2 focus:ring-primary-100';
    const cn = `w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${bg} ${ring} ${className} `;

    return textarea ? (
      <textarea
        ref={ref as any}
        className={cn}
        data-testid="textarea"
        {...(props as any)}
      />
    ) : (
      <>
        <input ref={ref} className={cn} data-testid="input" {...props} />
        {error ? <p className="text-xs text-red-500">{error}</p> : null}
      </>
    );
  },
);

Input.displayName = 'Input';
