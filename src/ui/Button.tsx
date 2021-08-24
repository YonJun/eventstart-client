import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from 'react';
import { Spinner } from './Spiner';

const colorClassnames = {
  primary:
    'text-white bg-primary-500 hover:bg-primary-400 disabled:bg-gray-200',
  transparent: 'text-primary-500 bg-transparent',
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean;
  icon?: ReactNode;
  color?: keyof typeof colorClassnames;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  color = 'primary',
  loading,
  icon,
  className = '',
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={`duration-200 flex items-center py-2 px-6 rounded-lg relative text-sm text-white transition-colors transform ${colorClassnames[color]} active:translate-y-1 disabled:translate-y-0 disabled:cursor-not-allowed
       ${className}`}
      data-testid="button"
      {...props}
    >
      {loading && (
        <span
          className={`absolute w-full h-full flex items-center justify-center top-0 left-0`}
        >
          <Spinner size="4" />
        </span>
      )}
      <span
        className={`${
          loading ? 'opacity-0' : ``
        } w-full flex items-center justify-center`}
      >
        {icon && <span className={`mr-2 flex items-start`}>{icon}</span>}
        {children}
      </span>
    </button>
  );
};
