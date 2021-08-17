import React from 'react';
import { useScreenType } from '../../shared-hooks/useScreenType';
import LeftHeader from './LeftHeader';
import { RightHeader } from './RightHeader';

export interface MainHeaderProps {}

export const MainHeader: React.FC<MainHeaderProps> = () => {
  const screenType = useScreenType();

  return (
    <div className="flex flex-1 justify-center w-full">
      {screenType === 'fullscreen' ? (
        <div className="flex mr-4">
          <LeftHeader />
        </div>
      ) : (
        <div>MainHeader</div>
      )}

      {screenType === 'fullscreen' ? (
        <div className="flex ml-4">
          <RightHeader />
        </div>
      ) : null}
    </div>
  );
};
