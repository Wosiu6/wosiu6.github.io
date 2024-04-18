import React from 'react';
import '../BaseComponentStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSkull } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import TitleComponent from '../titleComponent/TitleComponent';

const AboutText: React.FC = () => {
  return (
    <div className="container py-5">
      <TitleComponent title='Page not found' />
      <FontAwesomeIcon icon={faSkull} />
    </div>
  );
}
export default AboutText;
