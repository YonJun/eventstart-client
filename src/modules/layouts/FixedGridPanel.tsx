import React, { FC } from 'react';

export const FixedGridPanel: FC = ({ children }) => {
  return (
    <div
      className={`flex pt-5 flex-col flex-1 sticky top-0 h-screen  overflow-y-auto`}
    >
      {children}
    </div>
  );
};
