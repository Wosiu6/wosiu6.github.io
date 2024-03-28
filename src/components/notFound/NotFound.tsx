import React from 'react';
import './NotFound.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSkull } from '@fortawesome/free-solid-svg-icons'

const AboutText: React.FC = () => {
  return (
    <div className="container py-5">
      <div className='titleContainer'>
        <a className="backIcon" href="">
            <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <h2 className="text-center">Page not found</h2>
      </div>
      <div className="row">
        
      </div>
      <FontAwesomeIcon icon={faSkull} />
    </div>
  );
}
export default AboutText;
