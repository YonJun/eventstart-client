import React, { FC } from 'react';
import { UserCircle } from '@styled-icons/boxicons-regular';
import { Grid } from '@styled-icons/boxicons-solid';
import { BookContacts } from '@styled-icons/fluentui-system-filled';

import { ButtonLink } from 'ui/ButtonLink';

export const SidebarLayout: FC = () => {
  return (
    <div className="bg-white w-full shadow p-3 xl:px-10 xl:py-16">
      <div className="space-y-5 flex flex-col items-start">
        <ButtonLink
          to="/dash"
          label="Administrador"
          icon={<UserCircle width={20} />}
        />

        <ButtonLink
          to="/my-events"
          label="Mis eventos"
          icon={<Grid width={20} />}
        />

        <ButtonLink
          to="/contacts"
          label="Contactos"
          icon={<BookContacts width={20} />}
        />
      </div>
    </div>
  );
};
