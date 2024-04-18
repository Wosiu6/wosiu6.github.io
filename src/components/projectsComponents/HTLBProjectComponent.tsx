import BaseProject from './BaseProjectComponent';
import React from 'react';

const HTLBProjectComponent: React.FC = () => {
  const imageUrls = [
    'hltb_2.png',
    'hltb_1.png'
  ];
  const description = 'This is the first .NET Api that I wrote myself. Its purpose is to access hidden API HLTB (How Long To Beat) endpoints to extract data.';
  const name = 'HLTB API';
  const sourceUrl = 'https://github.com/Wosiu6/PatApi';

  return (
    <BaseProject
      imageUrls={imageUrls}
      description={description}
      name={name}
      sourceUrl={sourceUrl}
    />
  );
};

export default HTLBProjectComponent;