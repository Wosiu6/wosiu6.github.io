import BaseProject from './BaseProjectComponent';
import React from 'react';

const ScreenLockProjectComponent: React.FC = () => {
  const imageUrls = [
    'screenlock_1.png'
  ];
  const description = 'This project implements a security-focused screen lock service for Android devices. The service automatically locks the device when connected to an external display after a period of inactivity, enhancing data protection in unattended scenarios.';
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

export default ScreenLockProjectComponent;