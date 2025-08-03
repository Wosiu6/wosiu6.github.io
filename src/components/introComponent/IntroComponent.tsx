import React from 'react';
import './IntroComponent.css';

interface IntroProps {
  imageSrc?: string;
  title?: string;
  imageAlt?: string;
}

const IntroComponent: React.FC<IntroProps> = ({
  imageSrc = '/images/avatar_de_rp.jpg',
  title = 'Pat',
  imageAlt = 'Avatar',
}) => {
  return (
    <div className="intro">
      <div className="intro-content">
        <img src={imageSrc} alt={imageAlt} className="intro-image" />
        <h1 className="intro-title">{title}</h1>
      </div>
    </div>
  );
};

export default IntroComponent;