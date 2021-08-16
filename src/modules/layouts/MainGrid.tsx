import React from 'react';
import { MainInnerGrid } from './MainInnerGrid';

export const MainGrid = ({ children }) => {
  return (
    <div
      className={`flex justify-center w-full min-h-screen`}
      data-testid="main-grid"
    >
      <MainInnerGrid>{children}</MainInnerGrid>
    </div>
  );
};
