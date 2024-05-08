import React from 'react';
import './BaseListComponent.css';
import TitleComponent from '../titleComponent/TitleComponent';

interface BaseListProps {
  items: Item[];
  title: string;
  isMainPage?: boolean;
}

interface Item {
  title: string;
  description: string;
  icon: string;
  url: string;
  openInNewPage: boolean;
}

const BaseListComponent: React.FC<BaseListProps> = ({ items, title, isMainPage }) => {
  return (
    <div className="container py-5">
      <TitleComponent title={title} isMainPage={isMainPage}/>
      <div className="row">
        {items.map((item, index) => (
          <a
            href={item.openInNewPage ? item.url : `#${item.url}`} 
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

export default BaseListComponent;