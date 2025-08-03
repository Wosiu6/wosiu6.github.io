import React from 'react';
import '../BaseComponentStyle.css'

import TitleComponent from '../titleComponent/TitleComponent';
import { Paths } from '../../Paths';

const title: string = 'About';

const AboutText: React.FC = () => {
  return (
    <div className="container py-5">
      <TitleComponent title={title} />
      <div className="row">
        <div className="col">
          <p className="lead">
            I am always looking for new challanges. If you think we'd get along or I could contribute to your project, feel free to reach out anywhere you like.
            <br></br>
            <br></br>
            Thats it.
          </p>
        </div>
      </div>
      <a
        href={'#' + Paths.CV_DISPLAY}
        className="link-button"
      >
        View My CV
      </a>
    </div>
  );
}
export default AboutText;
