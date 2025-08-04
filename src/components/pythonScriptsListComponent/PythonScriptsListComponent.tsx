import React from 'react';

import BaseListComponent from '../baseListComponent/BaseListComponent';
import { Paths } from '../../Paths';
import IListItem from '../../lib/interfaces/IListItem';

const PythonScriptsListComponent: React.FC = () => {
  const items: IListItem[] = [
    {
      key: 'python_extract',
      title: 'Extract Photos',
      description: 'Script to extract rectangles',
      url: Paths.PYTHON_EXTRACT_PHOTOS,
      icon: 'images/icons/extractPhotos.png',
      openInNewPage: false
    }
  ];

  const title = "I don't even know why I put it here, I don't really like pyton 🐍";

  return (
    <BaseListComponent items={items} title={title} />
  );
};

export default PythonScriptsListComponent;
