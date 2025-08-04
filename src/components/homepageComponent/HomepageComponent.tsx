import React from 'react';
import './HomepageComponent.css';
import { Paths } from '../../Paths';
import BaseListComponent from '../baseListComponent/BaseListComponent';
import IListItem from '../../lib/interfaces/IListItem';

const HomepageComponent: React.FC = () => {
  const items: IListItem[] = [
    {
      key: 'homepage_portfolio',
      title: 'Projects',
      description: 'projects I have worked on',
      url: Paths.PORTFOLIO_LIST,
      icon: 'images/icons/portfolio.png',
      openInNewPage: false
    },
    {
      key: 'homepage_about',
      title: 'More about me',
      description: 'Meeee',
      url: Paths.ABOUT_ME,
      icon: 'images/icons/man.png',
      openInNewPage: false
    },
    {
      key: 'homepage_mics',
      title: 'Misc.',
      description: 'Misc.',
      url: Paths.MISC_LIST,
      icon: 'images/icons/box.png',
      openInNewPage: false
    }
  ];
  const title: string = 'Who?';

  return (
    <BaseListComponent title={title} items={items} isMainPage={true}/>
  );
};

export default HomepageComponent;
