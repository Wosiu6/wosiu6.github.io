import React from 'react';
import '../BaseComponentStyle.css';

import TitleComponent from '../titleComponent/TitleComponent';

const title = 'About this site';
const SiteDesciprtion: React.FC = () => {
  return (
    <div className="container py-5">
      <TitleComponent title={title} />
      <div className="row">
        <p>
          The site&apos;s structure, optimalisation, UX and scripts could be improved dramatically.
          However, having said that, I could not care less, off to doing non front endy things.
        </p>
        <br></br>
        <h3>Deployment and vc</h3>
        <p>
          It deploys to github pages automatically using Actions that is why I push directly to main.
        </p>
        <br></br>
        <h3>Why React?</h3>
        <p>
          Honestly, good question. Not a clue, I hate frontend.
        </p>
      </div>
      <a
        href="https://github.com/Wosiu6/wosiu6.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="link-button link-button--black"
      >
        Source Code
      </a>
    </div>
  );
}
export default SiteDesciprtion;
