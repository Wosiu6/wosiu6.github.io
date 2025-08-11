import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './TitleComponent.css';
import { OnBackClicked } from '../../functions/BackPressHandler';

interface ITitleProps {
  title: string;
  isMainPage?: boolean;
}

const TitleComponent: React.FC<ITitleProps> = (props) => {
  return (
    <div className='titleContainer'>
      {!props.isMainPage &&
        <a onClick={OnBackClicked} className="backIcon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
      }

      {props.title &&
        <h2 className='title-text'>{props.title}</h2>
      }
    </div>
  );
};

export default TitleComponent;