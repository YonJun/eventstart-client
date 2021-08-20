import React from 'react';
import { PageComponent } from 'types/PageComponent';
import { WaitForAuth } from 'modules/auth/WaitForAuth';
import { HeaderController } from 'modules/display/HeaderController';

import { DefaultDesktopLayout } from 'modules/layouts/DefaultDesktopLayout';

interface LoungePageProps {}

export const DashboardPage: PageComponent<LoungePageProps> = () => {
  return (
    <WaitForAuth>
      <HeaderController embed={{}} title={'Dashboard'} />
      <DefaultDesktopLayout>
        <div className="text-center" style={{ marginTop: '30vh' }}>
          En progreso!!
        </div>
      </DefaultDesktopLayout>
    </WaitForAuth>
  );
};
