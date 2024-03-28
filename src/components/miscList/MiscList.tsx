import React from 'react';
import './MiscList.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

interface Item {
  title: string;
  description: string;
  icon: string;
  url: string;
  openInNewPage: boolean;
}

const MiscList: React.FC = () => {
  const items: Item[] = [
    {
      title: 'Robert Pattinson as Martin Martinaise?',
      description: 'Why not?',
      url: 'https://www.mycast.io/stories/hbo-s-disco-elysium-2024/roles/martin-martinaise/18771496/suggestions/robert-pattinson/24424418/',
      icon: 'images/projectIcons/disco-ball.png',
      openInNewPage: true
    },
    {
      title: 'What am I playing atm?',
      description: 'Steam brrr',
      url: 'https://steamcommunity.com/id/Wosiu6',
      icon: 'images/projectIcons/steam-logo.png',
      openInNewPage: true
    },
    {
      title: 'About this site',
      description: 'PatSite',
      url: '#/Misc/AboutSite',
      icon: 'images/projectIcons/website.png',
      openInNewPage: false
    }
  ];

  return (
    <div className="container py-5">
      <div className='titleContainer'>
        <a className="backIcon" href="">
            <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <h2 className="text-center">What have we here...</h2>
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

export default MiscList;
