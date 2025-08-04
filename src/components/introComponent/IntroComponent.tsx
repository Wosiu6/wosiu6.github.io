import React from 'react';
import './IntroComponent.css';

interface IntroProps {
  imageSrc?: string;
  shortName?: string;
  restOfTheName?: string;
  imageAlt?: string;
}

const IntroComponent: React.FC<IntroProps> = ({
  imageSrc = '/images/avatar_de_rp.jpg',
  shortName = 'Pat',
  restOfTheName = 'ryk',
  imageAlt = 'Avatar',
}) => {
  return (
    <div className="intro">
      <div className="intro-content">
        <img src={imageSrc} alt={imageAlt} className="intro-image" />
        <div className='intro-name'>
          <h1 className="intro-short">{shortName}<span className='intro-rest'>{restOfTheName}</span></h1>
        </div>
      </div>
    </div>
  );
};

export default IntroComponent;