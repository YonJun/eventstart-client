import React, { FC } from 'react';
import { InputFileEvent } from 'ui/InputFileEvent';

export const AddEventForm: FC = () => {
  return (
    <div className="xl:pl-10">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <InputFileEvent />
        <div className="p-5">xddd</div>
      </div>
    </div>
  );
};
