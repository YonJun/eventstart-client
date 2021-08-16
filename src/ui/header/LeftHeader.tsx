import Link from 'next/link';
import React from 'react';
import { useScreenType } from 'shared-hooks/useScreenType';

export interface LeftHeaderProps {}

const LeftHeader: React.FC<LeftHeaderProps> = ({}) => {
  const screenType = useScreenType();
  return (
    <Link href="/dash">
      <a data-testid="logo-link" className="w-full">
        {screenType === '3-cols' ? (
          <span>large logo</span>
        ) : (
          <div className="flex justify-center w-full">
            <span>slogo</span>
          </div>
        )}
      </a>
    </Link>
  );
};

export default LeftHeader;
