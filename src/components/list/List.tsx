import React from 'react';
import './List.css';

interface Item {
  title: string;
  description: string;
  icon: string;
  url: string;
}

const List: React.FC = () => {
  const items: Item[] = [
    {
      title: 'First Website',
      description: 'First website I have written as a university project.',
      url: 'https://patwos.web.app/',
      icon: 'images/projectIcons/computer.png',
    },
    {
      title: 'Physical Simulation',
      description: 'Razor website I have written to learn something new.',
      url: 'https://wosiu6.github.io/PatSite_Razor/ballSimulation',
      icon: 'images/projectIcons/gravity.png',
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center">And what has he been up to...</h2>
      <div className="row">
        {items.map((item, index) => (
          <a
            href={item.url}
            target="_blank"
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
