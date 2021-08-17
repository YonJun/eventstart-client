import React, { FC } from 'react';
import { useScreenType } from 'shared-hooks/useScreenType';

interface MainInnerGridProps {
  className?: string;
}
export const MainInnerGrid: FC<MainInnerGridProps> = ({
  children,
  className = '',
}) => {
  const screenType = useScreenType();

  let gridTemplateColumns = '285px 800px';
  let myClassName = ``;

  if (screenType === '2-cols') {
    gridTemplateColumns = '60px 640px';
  } else if (screenType === '1-cols') {
    gridTemplateColumns = '60px 640px';
  } else if (screenType === 'fullscreen') {
    myClassName = 'w-full px-3';
    gridTemplateColumns = '1fr';
  }

  return (
    <div
      id="main"
      className={`relative ${myClassName} ${className}`}
      style={{
        display: screenType === 'fullscreen' ? 'flex' : 'grid',
        gridTemplateColumns,
        columnGap: 0, //60,
      }}
    >
      {children}
    </div>
  );
};
