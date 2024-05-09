import BaseProjectComponent from '../projectsComponents/BaseProjectComponent';
import React from 'react';

const ExtractPhotosComponent: React.FC = () => {
  const imageUrls = [
    'python/extract_photos_1.png',
    'python/extract_photos_2.png',
    'python/extract_photos_3.png'
  ];
  const description = 'This Python script takes a picture, finds rectangular objects within it (possibly photos), and saves each rectangle as a separate image file.';
  const name = 'Extract Photos from a photo';
  const sourceUrl = 'https://github.com/Wosiu6/extract_pictures';

  return (
    <BaseProjectComponent
      imageUrls={imageUrls}
      description={description}
      name={name}
      sourceUrl={sourceUrl}
    />
  );
};

export default ExtractPhotosComponent;