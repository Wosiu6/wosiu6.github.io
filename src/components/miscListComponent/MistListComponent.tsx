import React from 'react';

import BaseListComponent from '../baseListComponent/BaseListComponent';
import { Paths } from '../../Paths';
import IListItem from '../../lib/interfaces/IListItem';

const MiscListComponent: React.FC = () => {
  const items: IListItem[] = [
    {
      key: 'misc_steam',
      title: 'What am I playing lately?',
      description: 'Steam brrr',
      url: 'https://steamcommunity.com/id/Wosiu6',
      icon: 'images/icons/steam-logo.png',
      openInNewPage: true
    },
    {
      key: 'misc_about_site',
      title: 'About this site',
      description: 'PatSite',
      url: Paths.ABOUT_SITE,
      icon: 'images/icons/website.png',
      openInNewPage: false
    },
  ];

const title: string = "Misc things, get to know me better";
  return (
      <BaseListComponent items={items} title={title}/>
  );
};

export default MiscListComponent;
