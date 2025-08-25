import BaseProject from './BaseProjectComponent';
import React from 'react';


const GamesApiProjectComponent: React.FC = () => {
  const imageUrls = [
    'projects/games_api_1.png',
    'projects/games_api_2.png',
    'projects/games_api_3.png',
    'projects/games_api_4.png'
  ];
  const description = 'This project focuses on showcasing .NET abilities. Both APIs are implemented minially using minimal API approach. The main purpose of this project was to learn MediatR library and CQRS pattern. The project is documented using Swagger, which makes it easy to test and understand the available endpoints. This project utilises JWT authentication to secure certain endpoints, ensuring that only authorized users can access specific resources.';
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