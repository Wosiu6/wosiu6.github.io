import BaseProject from './BaseProjectComponent';
import React from 'react';

const TakeoutMergerComponent: React.FC = () => {
  const imageUrls: string[] | undefined = [];
  const description = 'Takeout Merger is an commandline tool that allows you to merge metadata from Google Takeout files, specifically focusing on geolocation and time data. It helps users to combine and analyze their data more effectively or move the photos from one account to another';
  const name = 'Takeout Merger';
  const sourceUrl = 'https://github.com/Wosiu6/takeout-merger';

  return (
    <BaseProject
      imageUrls={imageUrls}
      description={description}
      name={name}
      sourceUrl={sourceUrl}
    />
  );
};

export default TakeoutMergerComponent;