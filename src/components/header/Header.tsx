import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['background_1.jpg', 'background_2.jpg', 'background_3.jpg', 'background_4.jpg'];
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const imagesNested = ['background_1.jpg', 'background_2.jpg', 'background_3.jpg', 'background_4.jpg'];

    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imagesNested.length);
    }, 15000); // 15sec

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    setCurrentImage(images[imageIndex]);
  }, [imageIndex, images]);

  return (
    <header className="header" style={{ backgroundImage: `url(images/${currentImage})` }} />
  );
};

export default Header;
