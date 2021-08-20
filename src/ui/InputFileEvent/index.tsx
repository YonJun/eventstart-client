import { ChangeEvent, useState } from 'react';
import { Edit } from '@styled-icons/boxicons-regular';

export const InputFileEvent = () => {
  const [img, set_img] = useState<File | null>(null);

  const handleFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files);
    // console.log('files:', files[0]);
    set_img(files[0] ? files[0] : null);
  };

  return (
    <div className="relative h-40">
      {img ? (
        <img
          className="object-cover h-full w-full"
          src={URL.createObjectURL(img)}
          alt={img.name}
        />
      ) : (
        <img
          className="object-cover h-full w-full"
          src="/assets/default_event_img.webp"
          alt="Default img"
        />
      )}
      <input
        type="file"
        id="event-img"
        onChange={handleFileSelected}
        className="hidden"
        accept="image/*"
      />
      <label
        htmlFor="event-img"
        className="absolute bottom-5 right-10 cursor-pointer bg-indigo-100 text-gray-500 p-2 rounded-full transform active:translate-y-1 "
      >
        <Edit width={30} />
      </label>
    </div>
  );
};
