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

const PorfolioListComponent: React.FC = () => {
  const items: Item[] = [
    {
      title: 'CleanAPI - Games',
      description: 'Clean API written in .NET',
      url: Paths.CLEANAPI_GAMES_PROJECT,
      icon: 'images/projectIcons/cleanGame.png',
      openInNewPage: false
    },
    
    {
      title: 'Physical Simulation',
      description: 'Razor website I have written to learn something new.',
      url: Paths.RAZOR_BALLS_PROJECT,
      icon: 'images/projectIcons/gravity.png',
      openInNewPage: false
    },
    {
      title: 'Screen Lock Service',
      description: 'Java',
      url: Paths.SCREEN_LOCK_PROJECT,
      icon: 'images/projectIcons/lock.png',
      openInNewPage: false
    },
    {
      title: 'HLTB .NET API',
      description: 'HLTB API written in .NET',
      url: Paths.HLTB_PROJECT,
      icon: 'images/projectIcons/hltb.png',
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

  const title = "It ain't much but it is honest work 👨‍🌾";

  return (
    <BaseListComponent items={items} title={title} />
  );
};

export default PorfolioListComponent;
