import React from 'react';
import './AboutText.css';

const AboutText: React.FC = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center">About</h2>
      <div className="row">
        <p>My name is Patryk. I like playing games and staying active. I am a big fan of technology and anything futuristic, Cyberpunk for instance.</p>
        <p>I mainly do backend. I do not know why I decided to put so much effort into this site.</p>
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
