import BaseProject from './BaseProject';
import React from 'react';

const ScreenLockProject: React.FC = () => {
  const imageUrls = [
    'screenlock_1.png'
  ];
  const description = 'This is a Screen Lock Service project created to force the device to lock itself after certain time in case it is connected to an external display.';
  const name = 'Screen Lock Service';
  const sourceUrl = 'https://github.com/Wosiu6/ScreenLock';

  return (
    <BaseProject
      imageUrls={imageUrls}
      description={description}
      name={name}
      sourceUrl={sourceUrl}
    />
  );
};

export default ScreenLockProject;