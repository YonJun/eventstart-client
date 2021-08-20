import React, { FC } from 'react';
import { WaitForAuth } from 'modules/auth/WaitForAuth';
import { HeaderController } from 'modules/display/HeaderController';
import { DefaultDesktopLayout } from 'modules/layouts/DefaultDesktopLayout';
import { Button } from 'ui/Button';
import { Add } from '@styled-icons/fluentui-system-filled';
import { Overlay } from 'ui/Overlay';
import { AddEventForm } from './AddEventForm';

export const MyEventsPage: FC = () => {
  return (
    <WaitForAuth>
      <HeaderController embed={{}} title={'Mis eventos'} />
      <DefaultDesktopLayout>
        <div className="relative cursor-not-allowed mb-10">
          <Overlay text="Aún no disponible">
            <Button className="uppercase float-right" icon={<Add width={20} />}>
              Elegir plantilla
            </Button>
          </Overlay>
        </div>

        <AddEventForm />
      </DefaultDesktopLayout>
    </WaitForAuth>
  );
};
