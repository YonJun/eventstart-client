import React, { FC } from 'react';

export const SidebarLayout: FC = () => {
  return (
    <div className="bg-white w-full shadow p-1 xl:p-10">
      <ul className="uppercase">
        <li>Administrador</li>
        <li>Mis Eventos</li>
        <li>Contactos</li>
      </ul>
    </div>
  );
};
