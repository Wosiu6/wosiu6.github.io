import React from 'react';
import './AboutText.css';

const AboutText: React.FC = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center">About</h2>
      <div className="row">
        <p>My name is Patryk. I like playing games and staying active. I am a big fan of technology and anything futuristic, Cyberpunk for instance.</p>
        <p>I enjoy doing backend. Do not ask me why I wrote any css for this site.</p>
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
