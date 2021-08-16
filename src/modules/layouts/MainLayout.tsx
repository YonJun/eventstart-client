import React, { FC } from 'react';

import { MainInnerGrid } from './MainInnerGrid';
import { useScreenType } from 'shared-hooks/useScreenType';
import { LeftPanel } from './GridPanels';

interface MainLayoutProps {
  leftPanel?: React.ReactNode;
  rightPanel?: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  leftPanel = <div />,
}) => {
  const screenType = useScreenType();

  let middle = null;

  switch (screenType) {
    case '3-cols':
      middle = (
        <>
          <LeftPanel>{leftPanel}</LeftPanel>
          {children}
        </>
      );
      break;
    case '2-cols':
      middle = (
        <>
          <LeftPanel>{leftPanel}</LeftPanel>
          {children}
        </>
      );
      break;
    case '1-cols':
      middle = (
        <>
          <LeftPanel>{leftPanel}</LeftPanel>
          {children}
        </>
      );
      break;
    case 'fullscreen':
      middle = <>{children}</>;
      break;

    default:
      middle = <>{children}</>;
  }

  return (
    <>
      <div className="flex flex-col items-center w-full bg-green-700">
        <MainInnerGrid>{middle}</MainInnerGrid>
      </div>
    </>
  );
};
