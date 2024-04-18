import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

interface TitleProps {
  title: string;
}

const TitleComponent: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className='titleContainer'>
      {(
        <Link to={-1 as any} className="backIcon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      )}
      <h2>{title}</h2>
    </div>
  );
};

export default TitleComponent;