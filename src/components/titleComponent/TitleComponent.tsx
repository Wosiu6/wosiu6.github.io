import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

interface TitleProps {
  title: string;
  isMainPage?: boolean;
}

const TitleComponent: React.FC<TitleProps> = (props) => {
  return (
    <div className='titleContainer'>
      {!props.isMainPage &&
        <Link to={-1 as any} className="backIcon">
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