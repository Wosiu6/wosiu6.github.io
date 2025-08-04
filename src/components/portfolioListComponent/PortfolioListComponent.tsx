import React from 'react';

import BaseListComponent from '../baseListComponent/BaseListComponent';
import { Paths } from '../../Paths';
import IListItem from '../../lib/interfaces/IListItem';

const PorfolioListComponent: React.FC = () => {
  const items: IListItem[] = [
    
    {
      key: 'portfolio_balls',
      title: 'Physical Simulation',
      description: 'Razor website I have written to learn something new.',
      url: Paths.RAZOR_BALLS_PROJECT,
      icon: 'images/icons/gravity.png',
      openInNewPage: false
    },
    {
      key: 'google_takeout',
      title: 'Takeout Merger',
      description: 'Google Takeout Merger for metadata- geolocation and time',
      url: Paths.TAKEOUT_MERGER,
      icon: 'images/icons/takeout-merger.png',
      openInNewPage: false
    },
    {
      key: 'portfolio_screen_lock',
      title: 'Screen Lock Service',
      description: 'Java',
      url: Paths.SCREEN_LOCK_PROJECT,
      icon: 'images/icons/lock.png',
      openInNewPage: false
    },
    {
      key: 'portfolio_python',
      title: 'Python Scripts',
      description: 'Various Python scripts',
      url: Paths.PYTHON_SCRIPTS_PROJECT,
      icon: 'images/icons/python.png',
      openInNewPage: false
    },
    {
      key: 'portfolio_hltb',
      title: 'HLTB API Cracking',
      description: 'HLTB API written in .NET',
      url: Paths.HLTB_PROJECT,
      icon: 'images/icons/hltb.png',
      openInNewPage: false
    },
  ];

  const title = "It ain't much but it is honest work 👨‍🌾";

  return (
    <BaseListComponent items={items} title={title} />
  );
};

export default PorfolioListComponent;
