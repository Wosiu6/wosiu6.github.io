import BaseProject from './BaseProjectComponent';
import React from 'react';


const GamesApiProjectComponent: React.FC = () => {
  const imageUrls = [
    'projects/games_api_1.png',
    'projects/games_api_2.png'
  ];
  const description = 'This project focuses on showcasing .NET abilities.';
  const name = 'Games API';
  const sourceUrl = 'https://github.com/Wosiu6/games-api';

  return (
    <BaseProject
      imageUrls={imageUrls}
      description={description}
      name={name}
      sourceUrl={sourceUrl}
    />
  );
};

export default GamesApiProjectComponent;