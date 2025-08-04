import React, { useEffect } from 'react';

import 'react-medium-image-zoom/dist/styles.css'
import './BaseProjectComponent.css';

import TitleComponent from '../titleComponent/TitleComponent';
import swal from 'sweetalert';
import { IImagesProps, Images } from '../../functions/ImagesZoom';

interface BaseProjectProps extends IImagesProps {
  description: string,
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
      <div className="buttons-group">
        <a href={props.sourceUrl} target="_blank" rel="noreferrer noopener" className='link-button link-button--black'>
          View Source
        </a>

        {props.hostUrl && (
          <a href={props.hostUrl} target="_blank" rel="noreferrer noopener" className="link-button link-button--black">
            Go to project
          </a>
        )}
      </div>
    </div>

  );
};



export default BaseProjectComponent;
