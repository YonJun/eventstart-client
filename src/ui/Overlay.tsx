import React, { FC } from 'react';

export const Overlay: FC<{ text?: string }> = ({ text, children }) => {
  return (
    <>
      {children}
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        style={{ background: 'rgba(0, 0, 0, 0.6)' }}
      >
        {text && <span className="text-white">{text}</span>}
      </div>
    </>
  );
};
