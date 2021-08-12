import React, { FC } from 'react';

export const GridAuthUser: FC = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-flow-row gap-4 h-screen">
      <div className="bg-primary-300 h-full hidden lg:block" />
      <div className="flex h-full items-center justify-center">
        <div>
          <h1>EventStart</h1>
          {children}
        </div>
      </div>
    </div>
  );
};
