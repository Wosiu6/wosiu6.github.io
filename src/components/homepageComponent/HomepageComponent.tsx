import React from 'react';
import './HomepageComponent.css';
import { Paths } from '../../Paths';
import BaseListComponent from '../baseListComponent/BaseListComponent';

interface Item {
  title: string;
  description: string;
  icon: string;
  url: string;
  openInNewPage: boolean;
}

const HomepageComponent: React.FC = () => {
  const items: Item[] = [
    {
      title: 'Portfolio',
      description: 'portfolio',
      url: Paths.PORTFOLIO_LIST,
      icon: 'images/projectIcons/portfolio.png',
      openInNewPage: false
    },
    {
      title: 'More about me',
      description: 'Meeee',
      url: Paths.ABOUT_ME,
      icon: 'images/projectIcons/man.png',
      openInNewPage: false
    },
    {
      title: 'Misc.',
      description: 'Misc.',
      url: Paths.MISC_LIST,
      icon: 'images/projectIcons/box.png',
      openInNewPage: false
    }
  ];
  const title: string = 'And what has he been up to 👷‍♂️';

  return (
    <BaseListComponent title={title} items={items} isMainPage={true}/>
  );
};

export default HomepageComponent;
