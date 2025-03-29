import React from 'react';

import './IntroComponent.css';

const IntroComponent: React.FC = () => {
  return (
    <div className="intro">
      <div className="content">
        <img src="images/avatar_de_rp.jpg" alt="Avatar" />
        <h1>Pat</h1>
      </div>
    </div>
  );
};

export default IntroComponent;
