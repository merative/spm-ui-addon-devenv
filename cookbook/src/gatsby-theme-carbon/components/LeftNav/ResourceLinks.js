import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'GitHub',
    href: 'https://github.com/merative/spm-ui-addon-devenv',
  },
  {
    title: 'Documentation',
    href: 'https://curam-spm-devops.github.io/wh-support-docs/spm/pdf-documentation',
  }
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
