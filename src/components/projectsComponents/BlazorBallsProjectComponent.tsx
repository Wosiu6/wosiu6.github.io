import BaseProject from './BaseProjectComponent';
import React from 'react';

const BlazorBallsProjectComponent: React.FC = () => {
  const imageUrls = [
    'projects/balls_1.png',
    'projects/balls_2.png'
  ];
  const description = 'This project explores the unique intersection of physics simulations, C#, and Blazor WASM. It leverages GitHub Pages for automated deployment, offering a web-based platform for users to interact with these simulations.';
  const name = 'Blazor Balls Simulation';
  const sourceUrl = 'https://github.com/Wosiu6/balls-blazor-wasm';
  const hostUrl = 'https://wosiu6.github.io/balls-blazor-wasm/';

  return (
    <BaseProject
      imageUrls={imageUrls}
      description={description}
      name={name}
      sourceUrl={sourceUrl}
      hostUrl={hostUrl}
    />
  );
};

export default BlazorBallsProjectComponent;