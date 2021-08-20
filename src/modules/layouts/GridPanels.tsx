import React, { FC } from 'react';
import { FixedGridPanel, GridPanel } from 'ui/GridPanel';
import LeftHeader from 'ui/header/LeftHeader';
import { MainHeader } from 'ui/header/MainHeader';

interface LeftPanelProps {}

const HeaderWrapper: FC = ({ children }) => (
  <div className={`flex mb-16 h-12 items-center`}>{children}</div>
);

export const LeftPanel: React.FC<LeftPanelProps> = ({ children }) => {
  return (
    <FixedGridPanel className="z-20">
      <HeaderWrapper>
        <LeftHeader />
      </HeaderWrapper>
      {children}
    </FixedGridPanel>
  );
};

export const MainPanel: React.FC<LeftPanelProps> = ({ children }) => {
  return (
    <GridPanel>
      <div className="flex sticky top-0 w-full flex-col z-10 pt-5">
        <HeaderWrapper>
          <MainHeader />
        </HeaderWrapper>
      </div>
      {children}
    </GridPanel>
  );
};
