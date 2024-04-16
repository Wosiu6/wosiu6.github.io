import BaseProject from './BaseProject';
import React from 'react';

const RazorBallsProject: React.FC = () => {
  const imageUrls = [
    'balls_1.png',
    'balls_2.png'
  ];
  const description = 'This is a project that creates an utter abomination by combining physical simulations, C# and Blazor WASM. It is deployed automatically by GitHub Pages.';
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

export default RazorBallsProject;