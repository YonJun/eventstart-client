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
        <div>
          {[...(Array(30).keys() as any)].map((idx) => (
            <p key={idx}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              dolore suscipit at explicabo maxime saepe sit? Praesentium fugit
              nemo laudantium illo ut voluptate natus? Quasi tempore culpa
              perspiciatis debitis inventore!
            </p>
          ))}
        </div>
      </DefaultDesktopLayout>
    </WaitForAuth>
  );
};
