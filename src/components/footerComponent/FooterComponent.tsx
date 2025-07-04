import React from 'react';
import './FooterComponent.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faLastfm, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

const FooterComponent: React.FC = () => {
  return (
    <footer className="text-center bg-dark text-white py-3">
      <p>© {new Date().getFullYear()} Patryk Wos</p>
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
      </div>
      <div className="attributions">
        <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer" title="icons">Icons by Freepik</a>: <a href="licenses/license.pdf" title="license freepik">License</a>
      </div>
    </footer>
  );
};

export default FooterComponent;
