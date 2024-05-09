import React from 'react';
import '../BaseComponentStyle.css'

import TitleComponent from '../titleComponent/TitleComponent';
import { Paths } from '../../Paths';

const title: string = 'About';

const AboutText: React.FC = () => {
  return (
    <div className="container py-5">
      <TitleComponent title={title} />
      <div className="row">
        <p>When I&apos;m not crafting software solutions, I&apos;m likely:
          <ul>
            <li><b>Staying active:</b> Whether it&apos;s hitting the gym, exploring nature, or soaking up some sun, taking care of my physical health is important to me.</li>
            <li><b>Futuristic:</b> I&apos;m a total tech enthusiast, always curious about the latest breakthroughs. AI, high-performance computing - anything that pushes the boundaries excites me! (Think less Cyberpunk 2077 launch and more seamless innovation.)</li>
            <li><b>Building (beyond code):</b> I enjoy hands-on creation, whether it&apos;s building a new website, tackling a personal project, or experimenting with new technology.</li>
          </ul>
        </p>
      </div>
      <a
        href={'#' + Paths.CV_DISPLAY}
        className="cvLink"
      >
        View My CV
      </a>
    </div>
  );
}
export default AboutText;
