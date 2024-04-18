import React from 'react';

import BaseListComponent from '../baseListComponent/BaseListComponent';
import { Paths } from '../../Paths';

interface Item {
  title: string;
  description: string;
  icon: string;
  url: string;
  openInNewPage: boolean;
}

const MiscListComponent: React.FC = () => {
  const items: Item[] = [
    {
      title: 'What am I playing lately?',
      description: 'Steam brrr',
      url: 'https://steamcommunity.com/id/Wosiu6',
      icon: 'images/projectIcons/steam-logo.png',
      openInNewPage: true
    },
    {
      title: 'About this site',
      description: 'PatSite',
      url: Paths.ABOUT_SITE,
      icon: 'images/projectIcons/website.png',
      openInNewPage: false
    },
    {
      title: 'Robert Pattinson as Martin Martinaise?',
      description: 'Why not?',
      url: 'https://www.mycast.io/stories/hbo-s-disco-elysium-2024/roles/martin-martinaise/18771496/suggestions/robert-pattinson/24424418/',
      icon: 'images/projectIcons/disco-ball.png',
      openInNewPage: true
    },
  ];

const title: string = "Misc things, get to know me better.  ";
  return (
      <BaseListComponent items={items} title={title}/>
  );
};

export default MiscListComponent;
