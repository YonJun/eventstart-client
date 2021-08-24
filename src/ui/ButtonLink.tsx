import { useRouter } from 'next/router';
import React, { FC } from 'react';

interface ButtonLinkProps {
  to: string;
  icon?: React.ReactNode;
  label: string;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ to, icon, label }) => {
  const { asPath, push } = useRouter();

  const isActive = asPath === to;
  const activeCls = isActive
    ? 'bg-primary-400 text-white'
    : 'bg-transparent text-label';

  return (
    <div className="group lg:w-full">
      <button
        className={`flex  h-10 items-center font-bold px-2 rounded uppercase hover:bg-primary-400 hover:text-white ${activeCls} w-auto lg:w-full float-right`}
        onClick={() => push(to)}
      >
        {icon && (
          <span className={`lg:mr-2 group-hover:mr-2  flex items-center`}>
            {icon}
          </span>
        )}

        <span className="truncate hidden lg:block group-hover:block">
          {label}
        </span>
      </button>
    </div>
  );
};
