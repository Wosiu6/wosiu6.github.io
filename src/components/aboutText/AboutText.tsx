import React from 'react';
import './AboutText.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const AboutText: React.FC = () => {
  return (
    <div className="container py-5">
      <div className='titleContainer'>
        <a className="backIcon" href="">
            <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <h2 className="text-center">About</h2>
      </div>
      <div className="row">
        <p>By day, I'm a code-slinging software engineer who thrives in the back-end. When I'm not wrestling with servers and databases, you'll probably find me:
          <ul>
            <li><b>Leveling up (in real life, not just video games!):</b> Gotta stay active, you know? Whether it's hitting the gym, exploring new trails, or just getting some sunshine, I love keeping my body moving.</li>
            <li><b>Geeking out over the future:</b> I'm a total tech junkie, always fascinated by the latest advancements. AI, high-performance computing, you name it – if it's pushing the boundaries, I'm there! (Think Cyberpunk 2077, but hopefully with a smoother launch.)</li>
            <li><b>Building things (not just in code):</b> I love tinkering and creating, whether it's a new website (like this one!), a personal project, or just messing around with new tech.</li>
          </ul>
        </p>
        <h2>So, why React?</h2>
        <p>
          Honestly, good question. I like to learn new things, and sometimes the front-end world beckons... even if it involves wrangling stylesheets.
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
