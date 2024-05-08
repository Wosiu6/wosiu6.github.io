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

const PythonScriptsListComponent: React.FC = () => {
  const items: Item[] = [
    {
      title: 'Extract Photos',
      description: 'Script to extract rectangles',
      url: Paths.PYTHON_EXTRACT_PHOTOS,
      icon: 'images/projectIcons/extractPhotos.png',
      openInNewPage: false
    }
  ];

  const title = "My kludgy Python scripts 🐍";

  return (
    <BaseListComponent items={items} title={title} />
  );
};

export default PythonScriptsListComponent;
