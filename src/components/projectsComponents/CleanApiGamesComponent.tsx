import BaseProject from './BaseProjectComponent';
import React from 'react';

const CleanApiGamesComponent: React.FC = () => {
  const imageUrls = [
    'cleanApi_games_1.png',
    'cleanApi_games_2.png'
  ];
  const description = 'This is my attempt at writing a .NET MVC Clean Architecture API. Its purpose is to track user\'s games and related achievements. I wrote this using a startpoint to ensure best practices are used throughout the project.';
  const name = 'CleanAPI - Games';
  const sourceUrl = 'https://github.com/Wosiu6/CleanAPI.Games';

  return (
    <BaseProject
      imageUrls={imageUrls}
      description={description}
      name={name}
      sourceUrl={sourceUrl}
    />
  );
};

export default CleanApiGamesComponent;