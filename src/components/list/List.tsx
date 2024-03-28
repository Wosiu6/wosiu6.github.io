import React from 'react';
import './List.css';

interface Item {
  title: string;
  description: string;
  icon: string;
  url: string;
  openInNewPage: boolean;
}

const List: React.FC = () => {
  const items: Item[] = [
    {
      title: 'HLTB .NET API',
      description: 'HLTB API written in .NET',
      url: 'https://github.com/Wosiu6/PatAPI',
      icon: 'images/projectIcons/board-game.png',
      openInNewPage: true
    },
    {
      title: 'Physical Simulation',
      description: 'Razor website I have written to learn something new.',
      url: 'https://wosiu6.github.io/PatSite_Razor/ballSimulation',
      icon: 'images/projectIcons/gravity.png',
      openInNewPage: true
    },
    {
      title: 'First Website',
      description: 'First website I have written as a university project.',
      url: 'https://patwos.web.app/',
      icon: 'images/projectIcons/computer.png',
      openInNewPage: true
    },
    {
      title: 'More about me',
      description: 'Meeee',
      url: '#/About/',
      icon: 'images/projectIcons/man.png',
      openInNewPage: false
    },
    {
      title: 'Misc.',
      description: 'Misc.',
      url: '#/Misc/',
      icon: 'images/projectIcons/box.png',
      openInNewPage: false
    }
  ];

  return (
    <div className="container py-5">
      <div className='titleContainer'>
        <h2 className="text-center">And what has he been up to...</h2>
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

export default List;
