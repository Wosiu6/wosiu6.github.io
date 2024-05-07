import BaseProject from './BaseProjectComponent';
import React from 'react';


const HTLBProjectComponent: React.FC = () => {
  const imageUrls = [
    'hltb_2.png',
    'hltb_1.png'
  ];
  const description = 'This project represents my initial foray into developing .NET APIs. It focuses on data extraction from the hidden HLTB (How Long To Beat) endpoints.  A revised version is currently underway to optimize the approach.';
  const alertText = 'The project is undergoing a rewrite to address identified areas for improvement. The initial decision to utilize an API is being reconsidered in favor of a different approach.';
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