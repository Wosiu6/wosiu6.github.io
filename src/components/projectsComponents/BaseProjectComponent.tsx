import React, { useEffect } from 'react';
import Zoom from 'react-medium-image-zoom'

import 'react-medium-image-zoom/dist/styles.css'
import './BaseProjectComponent.css';

import TitleComponent from '../titleComponent/TitleComponent';
import swal from 'sweetalert';

interface BaseProjectProps {
  imageUrls?: string[],
  description: string,
  name: string,
  sourceUrl: string,
  hostUrl?: string,
  alertText?: string
}

const BaseProjectComponent: React.FC<BaseProjectProps> = (props) => {
  useEffect(() => {
    if (props.alertText) swal(props.alertText);
  }, []);

  return (
    <div className="container py-5">
      <TitleComponent title={props.name} />

      <p>{props.description}</p>

      {Images(props)}
      <div className="buttons">
        <a href={props.sourceUrl} target="_blank" rel="noreferrer noopener" className='link-button'>
          View Source
        </a>

        {props.hostUrl && (
          <a href={props.hostUrl} target="_blank" rel="noreferrer noopener" className="link-button">
            Go to project
          </a>
        )}
      </div>
    </div>

  );
};

function Images(props: BaseProjectProps) {
  if (props.imageUrls && props.imageUrls.length > 0) {
    return (
      <ul className="image-list">
        {props.imageUrls.map((imageUrl: string) => (
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
    );
  } else {
    return <p style={{ fontSize: '0.7em', color: '#bbb' }}>No images available.</p>;
  }
}

export default BaseProjectComponent;
