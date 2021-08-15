import React from 'react';
import { PageComponent } from 'types/PageComponent';
import { WaitForAuth } from 'modules/auth/WaitForAuth';
import { HeaderController } from 'modules/display/HeaderController';

interface LoungePageProps {}

export const DashboardPage: PageComponent<LoungePageProps> = ({}) => {
  return (
    <WaitForAuth>
      <HeaderController embed={{}} title={'Dashboard'} />
      <div>dashboard page</div>
    </WaitForAuth>
  );
};
