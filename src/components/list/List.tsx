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
    { title: 'First Website', description: 'First website I have written as a university project', url: 'https://patwos.web.app/', icon: 'images/projectIcons/oldSite.png'},
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
                <img className='icon' src={item.icon} alt={item.description}></img>
                <a className="card-title" href={item.url}>{item.title}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 );
};

export default List;
