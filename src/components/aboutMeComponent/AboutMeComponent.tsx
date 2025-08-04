import React from 'react';
import '../BaseComponentStyle.css'
import './AboutMeComponent.css'

import TitleComponent from '../titleComponent/TitleComponent';
import { Paths } from '../../Paths';
import { IImagesProps, Images } from '../../functions/ImagesZoom';

const title: string = 'About';

interface AboutMeImagesProps extends IImagesProps { }

const props: AboutMeImagesProps = {
  name: 'About Me gif',
  imageUrls: [
    'gifs/silverhand.gif',
    'gifs/jackie.gif',
  ]
}

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
        className="link-button link-button--black"
      >
        View My CV
      </a>
      <div className='also-like'>
        <br></br>
        <br></br>
        <p>Oh yeah, I also like cyberpunk.</p>
        <br></br>
        {Images(props)}
      </div>
      
    </div>
  );
}
export default AboutText;
