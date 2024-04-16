import React from 'react';
import './Projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

interface Item {
  title: string;
  description: string;
  icon: string;
  url: string;
  openInNewPage: boolean;
}

const ProjectList: React.FC = () => {
  const items: Item[] = [
    {
      title: 'HLTB .NET API',
      description: 'HLTB API written in .NET',
      url: '#/ProjectList/HLTBProject/',
      icon: 'images/projectIcons/hltb.png',
      openInNewPage: false
    },
    {
      title: 'Physical Simulation',
      description: 'Razor website I have written to learn something new.',
      url: '#/ProjectList/RazorBallsProject/',
      icon: 'images/projectIcons/gravity.png',
      openInNewPage: false
    },
    {
      title: 'Screen Lock Service',
      description: 'Java',
      url: '#/ProjectList/ScreenLockProject/',
      icon: 'images/projectIcons/lock.png',
      openInNewPage: false
    },
    {
      title: 'First Website',
      description: 'First website I have written as a university project.',
      url: 'https://patwos.web.app/',
      icon: 'images/projectIcons/computer.png',
      openInNewPage: true
    },
  ];

  return (
    <div className="container py-5">
      <div className='titleContainer'>
      <a className="backIcon" href="">
            <FontAwesomeIcon icon={faArrowLeft} />
      </a>
        <h2 className="text-center">It ain't much but it is honest work 👨‍🌾</h2>
      </div>
      <div className="row">
        {items.map((item, index) => (
          <a
            href={item.url}
            target={item.openInNewPage ? "_blank" : ""}
            rel="noopener noreferrer"
            className="project-card h-100 text-decoration-none"
          >
            <div key={index} className="col-md-4 mb-4">
              <div className="project-card h-100">
                <div className="card-body d-flex flex-column">
                  <img className="project-icon" src={item.icon} alt={item.description} />
                  <p className="card-title mt-auto">{item.title}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
