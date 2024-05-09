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
          However, having said that, I am not going to put more time nor effort into this site anymore, I want to focus on my other projects.
          You are free to explore this site&apos;s source code if you wish to have a go at improving it.
        </p>
        <p>
          It deploys to github pages automatically using Actions that is why I push directly to main.
        </p>
        <h3>So, why React?</h3>
        <p>
          Honestly, good question. I like to learn new things, and sometimes the front-end world beckons... even if it involves wrangling stylesheets.
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
