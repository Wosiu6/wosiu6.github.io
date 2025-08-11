import Zoom from 'react-medium-image-zoom'

export interface IImagesProps {
  imageUrls?: string[],
  name: string,
}

export function GetImages(props: IImagesProps) {
  if (props.imageUrls && props.imageUrls.length > 0) {
    return (
      <div className="image-group">
        <ul className="image-list">
          {props.imageUrls.map((imageUrl: string) => (
            <li key={imageUrl}>
              <Zoom>
                <img
                  alt={props.name}
                  src={'images/' + imageUrl}
                  width="150"
                />
              </Zoom>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <p style={{ fontSize: '0.7em', color: '#bbb' }}>No images available.</p>;
  }
}