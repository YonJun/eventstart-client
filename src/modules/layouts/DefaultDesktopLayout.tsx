import React from 'react';
import { SidebarLayout } from 'ui/sidebar/SidebarLayout';
import { MainPanel } from './GridPanels';
import { MainLayout } from './MainLayout';

interface DefaultDesktopLayoutProps {}

export const DefaultDesktopLayout: React.FC<DefaultDesktopLayoutProps> = ({
  children,
}) => {
  return (
    <MainLayout leftPanel={<SidebarLayout />}>
      <MainPanel>{children}</MainPanel>
    </MainLayout>
  );
};
