import BaseProject from './BaseProjectComponent';
import React from 'react';


const HTLBProjectComponent: React.FC = () => {
  const imageUrls = [
    'projects/hltb_2.png',
    'projects/hltb_1.png'
  ];
  const description = 'This project focuses on data extraction from the private HLTB (How Long To Beat) API endpoints written for Microsoft.';
  const alertText = 'The project had been put on hold, use just for the way of extracting data from the API.';
  const name = 'HLTB API';
  const sourceUrl = 'https://github.com/Wosiu6/';

  return (
    <BaseProject
      imageUrls={imageUrls}
      description={description}
      name={name}
      sourceUrl={sourceUrl}
      alertText={alertText}
    />
  );
};

export default HTLBProjectComponent;