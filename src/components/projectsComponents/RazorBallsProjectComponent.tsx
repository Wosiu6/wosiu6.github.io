import BaseProject from './BaseProjectComponent';
import React from 'react';

const RazorBallsProjectComponent: React.FC = () => {
  const imageUrls = [
    'balls_1.png',
    'balls_2.png'
  ];
  const description = 'This project explores the unique intersection of physics simulations, C#, and Blazor WASM. It leverages GitHub Pages for automated deployment, offering a web-based platform for users to interact with these simulations.';
  const name = 'Razor Balls Simulation';
  const sourceUrl = 'https://github.com/Wosiu6/PatSite_Razor';
  const hostUrl = 'https://wosiu6.github.io/PatSite_Razor/ballSimulation';

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

export default RazorBallsProjectComponent;