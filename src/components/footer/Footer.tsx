import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faLastfm, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile, faHome } from '@fortawesome/free-solid-svg-icons'

const Footer: React.FC = () => {

  // @ts-ignore
  const myIcon: IconProp = "fa-kit fa-my-icon";

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
        <a href="https://linkedin.com/in/patryk-wos-68347b17b" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.last.fm/user/wosiu6" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLastfm} />
        </a>
        <a href="#/CV/" title="CV" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFile} />
        </a>
      </div>
      <div className="attributions">
        <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer" title="icons">Icons by Freepik</a>
      </div>
    </footer>
  );
};

export default Footer;
