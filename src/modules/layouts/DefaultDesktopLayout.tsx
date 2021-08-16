import React from 'react';
import { SidebarLayout } from 'modules/sidebar/SidebarLayout';
import { MainLayout } from './MainLayout';

interface DefaultDesktopLayoutProps {}

export const DefaultDesktopLayout: React.FC<DefaultDesktopLayoutProps> = ({
  children,
}) => {
  return <MainLayout leftPanel={<SidebarLayout />}>{children}</MainLayout>;
};
