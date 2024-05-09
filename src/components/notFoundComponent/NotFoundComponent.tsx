import React from 'react';
import '../BaseComponentStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
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
