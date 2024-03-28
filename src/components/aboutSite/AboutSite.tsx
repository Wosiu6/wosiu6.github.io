import React from 'react';
import './AboutSite.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SiteDesciprtion: React.FC = () => {
  return (
    <div className="container py-5">
      <div className='titleContainer'>
        <a className="backIcon" href="#/Misc/">
            <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <h2 className="text-center">About this site</h2>
      </div>
      <div className="row">
        <p>
          The site's structure, optimalisation, UX and scripts could be improved dramatically.
          However, having said that, I am not going to put more time nor effort into this site anymore, I want to focus on my other projects.
          You are free to explore this site's source code if you wish to have a go at improving it.
        </p>
        <p>
          It deploys to github pages automatically using Actions that is why I push directly to main.
        </p>
      </div>
      <a
        href="https://github.com/Wosiu6/wosiu6.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="cvLink"
      >
        Source Code
      </a>
    </div>
  );
}
export default SiteDesciprtion;
