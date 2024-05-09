import React from 'react';

import BaseListComponent from '../baseListComponent/BaseListComponent';
import { Paths } from '../../Paths';
import IListItem from '../../lib/interfaces/IListItem';

const PorfolioListComponent: React.FC = () => {
  const items: IListItem[] = [
    {
      key: 'portfolio_clean_api',
      title: 'CleanAPI - Games',
      description: 'Clean API written in .NET',
      url: Paths.CLEANAPI_GAMES_PROJECT,
      icon: 'images/projectIcons/cleanGame.png',
      openInNewPage: false
    },
    {
      key: 'portfolio_balls',
      title: 'Physical Simulation',
      description: 'Razor website I have written to learn something new.',
      url: Paths.RAZOR_BALLS_PROJECT,
      icon: 'images/projectIcons/gravity.png',
      openInNewPage: false
    },
    {
      key: 'portfolio_python',
      title: 'Python Scripts',
      description: 'Various Python scripts',
      url: Paths.PYTHON_SCRIPTS_PROJECT,
      icon: 'images/projectIcons/python.png',
      openInNewPage: false
    },
    {
      key: 'portfolio_screen_lock',
      title: 'Screen Lock Service',
      description: 'Java',
      url: Paths.SCREEN_LOCK_PROJECT,
      icon: 'images/projectIcons/lock.png',
      openInNewPage: false
    },
    {
      key: 'portfolio_hltb',
      title: 'HLTB .NET API (Currently undergoing rewrite)',
      description: 'HLTB API written in .NET',
      url: Paths.HLTB_PROJECT,
      icon: 'images/projectIcons/hltb.png',
      openInNewPage: false
    },
    {
      key: 'portfolio_first_website',
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
