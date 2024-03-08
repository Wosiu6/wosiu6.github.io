import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faSpotify, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {

  // @ts-ignore
  const myIcon : IconProp = "fa-kit fa-my-icon";

  return (
    <footer className="text-center bg-dark text-white py-3">
      <p>© 2024 Patryk Wos</p>
      <div className="social-media">
        <a href="https://www.facebook.com/wosiu6" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/wosiu6" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://github.com/wosiu6" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        {/* Add more social media links as needed */}
      </div>
    </footer>
  );
};

export default Footer;
