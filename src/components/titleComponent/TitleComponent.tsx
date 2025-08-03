import React from 'react';
import { Link, To } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './TitleComponent.css';

interface ITitleProps {
  title: string;
  isMainPage?: boolean;
}

const TitleComponent: React.FC<ITitleProps> = (props) => {
  return (
    <div className='titleContainer'>
      {!props.isMainPage &&
        <Link to={-1 as To} className="backIcon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      }

      {props.title &&
        <h2>{props.title}</h2>
      }
    </div>
  );
};

export default TitleComponent;