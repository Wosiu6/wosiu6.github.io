import React, { useState, useEffect } from 'react';
import './HeaderComponent.css';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isShort: boolean;
}

const HeaderComponent: React.FC<HeaderProps> = ({ isShort }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['background_3.jpg', 'background_2.jpg', 'background_1.jpg', 'background_4.jpg', 'background_5.jpg', 'background_6.jpg'];
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000); // 15sec

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    setCurrentImage(images[imageIndex]);
  }, [imageIndex, images]);

  return (
    <Link to="/">
      <header className={isShort ? "shortHeader header" : "header"} style={{ backgroundImage: `url(images/${currentImage})` }} />
    </Link>
  );
};

export default HeaderComponent;
