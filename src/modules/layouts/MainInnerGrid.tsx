import React, { FC } from 'react';
import { useScreenType } from 'hooks/useScreenType';

interface MainInnerGridProps {
  className?: string;
}
export const MainInnerGrid: FC<MainInnerGridProps> = ({
  children,
  className = '',
}) => {
  const screenType = useScreenType();

  let gridTemplateColumns = '235px 940px';
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
      className={`relative bg-red-500 ${myClassName} ${className}`}
      style={{
        display: screenType === 'fullscreen' ? 'flex' : 'grid',
        gridTemplateColumns,
        columnGap: 60,
      }}
    >
      {children}
    </div>
  );
};
