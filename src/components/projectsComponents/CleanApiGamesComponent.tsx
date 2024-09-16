import BaseProject from './BaseProjectComponent';
import React from 'react';

const CleanApiGamesComponent: React.FC = () => {
  const imageUrls = [
    'cleanApi_games_1.png',
    'cleanApi_games_2.png'
  ];
  const description = 'This project implements a .NET MVC API adhering to Clean Architecture principles. It facilitates user game tracking and achievement management. The development leveraged a best-practice starting point to ensure a solid foundation and maintainability.';
  const name = 'CleanAPI - Games';
  const sourceUrl = 'https://github.com/Wosiu6/clean-api-games';

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