import React from 'react';

export const GridPanel: React.FC = ({ children }) => {
  return <div className={`flex flex-col flex-1 w-full`}>{children}</div>;
};

export const FixedGridPanel: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`flex pt-5 flex-col flex-1 sticky top-0 h-screen ${className}`}
    >
      {children}
    </div>
  );
};
