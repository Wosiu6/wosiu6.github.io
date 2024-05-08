import React, { useEffect } from 'react';
import Zoom from 'react-medium-image-zoom'

import 'react-medium-image-zoom/dist/styles.css'
import './BasePythonScriptComponent.css';

import TitleComponent from '../titleComponent/TitleComponent';
import swal from 'sweetalert';

interface BasePythonScriptProps {
  imageUrls: string[],
  description: string,
  name: string,
  sourceUrl: string,
  hostUrl?: string,
  alertText?: string
}

const BasePythonScriptComponent: React.FC<BasePythonScriptProps> = (props) => {
  useEffect(() => {
    if (props.alertText) swal(props.alertText);
  }, []);
  
  return (
    <div className="container py-5">
      <TitleComponent title={props.name} />
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

export default BasePythonScriptComponent;
