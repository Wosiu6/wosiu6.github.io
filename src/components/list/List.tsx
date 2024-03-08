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
    { title: 'Project 1', description: 'Desciption of Project 1', url: 'https://github.com', icon: 'path_to_project_1_image.jpg'},
    // Add more items as needed
 ];

 return (
    <div className="container py-5">
      <h2 className="text-center">Portfolio</h2>
      <div className="row">
        {items.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 );
};

export default List;
