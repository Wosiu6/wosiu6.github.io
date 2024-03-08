import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faSpotify, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {

  // @ts-ignore
  const myIcon : IconProp = "fa-kit fa-my-icon";

  return (
    <footer className="text-center bg-dark text-white py-3">
      <p>© 2024 Patryk Wos</p>
      <div className="social-media">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
          <i className="fa fa-twitter"></i>
        </a>
        {/* Add more social media links as needed */}
      </div>
    </footer>
  );
};

export default Footer;
