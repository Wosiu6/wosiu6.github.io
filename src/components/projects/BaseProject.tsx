import React from 'react';
import Zoom from 'react-medium-image-zoom'

import 'react-medium-image-zoom/dist/styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

interface BaseProjectProps {
  imageUrls: string[],
  description: string,
  name: string,
  sourceUrl: string,
  hostUrl?: string
}

const BaseProject: React.FC<BaseProjectProps> = (props) => {
  return (
    <div className="container py-5">
      <div className='titleContainer'>
        <a className="backIcon" href="#/ProjectList">
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <h2>{props.name}</h2>
      </div>
      <p>{props.description}</p>

      {props.imageUrls.length > 0 && (
        <ul className="image-list">
          {props.imageUrls.map((imageUrl) => (
            
            <li key={imageUrl}>
              <Zoom>
                <img
                  alt={props.name}
                  src={'images/projects/' + imageUrl}
                  width="150"
                />
              </Zoom>
            </li>
          ))}
        </ul>
      )}

      <a href={props.sourceUrl} target="_blank" rel="noreferrer noopener" className='cvLink'>
        View Source
      </a>

      {props.hostUrl && (
        <a href={props.hostUrl} target="_blank" rel="noreferrer noopener" className="cvLink">
          Go to project
        </a>
      )}
    </div>

  );
};

export default BaseProject;
