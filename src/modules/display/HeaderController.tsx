import React from 'react';
import Header from 'next/head';
import { NextPage } from 'next';
import { baseUrl } from 'lib/constants';
export interface HeaderControllerProps {
  title?: string;
  embed?: { hexColor?: string; image?: string };
  additionalKeywords?: string[];
  description?: string;
}

export const HeaderController: NextPage<HeaderControllerProps> = ({
  title,
  description = 'EventStart es una nueva forma de organizarnos.',
  additionalKeywords = [],
  embed,
}) => {
  return (
    <Header>
      {title ? <title>{title} | EventStart</title> : <title>EventStart</title>}
      <meta name="description" content={description} />

      <meta
        name="keywords"
        content={`EventStart, Doge${additionalKeywords?.map((k) => `, ${k}`)}`}
      />
      <meta name="theme-color" content={embed?.hexColor || '#EFE7DD'} />
      {embed ? (
        <>
          <meta name="og:title" content={title || 'EventStart'} />
          <meta name="og:description" content={description} />
          <meta name="og:site_name" content="EventStart" />
          <meta
            name="og:image"
            content={embed.image ? embed.image : `${baseUrl}/img/event.png`}
          />
        </>
      ) : (
        ''
      )}
    </Header>
  );
};
