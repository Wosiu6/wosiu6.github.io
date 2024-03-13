import React from 'react';
import './AboutText.css';

const AboutText: React.FC = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center">About</h2>
      <div className="row">
        <p>I do backend. I do not know why I made this so pretty.</p>
      </div>
      <a
      href="#/CV/"
      target="_blank"
      rel="noopener noreferrer"
      className="cvLink"
    >
      View My CV
    </a>
    </div>
  );
}
export default AboutText;
