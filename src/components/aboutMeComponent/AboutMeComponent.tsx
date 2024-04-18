import React from 'react';
import '../BaseComponentStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TitleComponent from '../titleComponent/TitleComponent';

const title: string = 'About';

const AboutText: React.FC = () => {
  return (
    <div className="container py-5">
      <TitleComponent title={title} />
      <div className="row">
        <p>When I'm not crafting software solutions, I'm likely:
          <ul>
            <li><b>Staying active:</b> Whether it's hitting the gym, exploring nature, or soaking up some sun, taking care of my physical health is important to me.</li>
            <li><b>Futuristic:</b> I'm a total tech enthusiast, always curious about the latest breakthroughs. AI, high-performance computing - anything that pushes the boundaries excites me! (Think less Cyberpunk 2077 launch and more seamless innovation.)</li>
            <li><b>Building (beyond code):</b> I enjoy hands-on creation, whether it's building a new website, tackling a personal project, or experimenting with new technology.</li>
          </ul>
        </p>
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
