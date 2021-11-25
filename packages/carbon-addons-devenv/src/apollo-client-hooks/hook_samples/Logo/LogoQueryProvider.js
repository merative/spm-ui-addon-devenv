/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2020. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Logo  from '../../../react/component_samples/Logo/Logo';
import ApolloClientQueryProvider from '../../core/ApolloClientQueryProvider';
import { useGetLogo } from './LogoQuery';

const LogoQueryProvider = ({ configuration }) => {

  const { data } = useGetLogo();
  const logo = (<>{data && data.logo.map(logoItem => (
    <Logo key={logoItem.logoId} imageName={logoItem.name}/>
   ))}</>);

  if (!data) return <></>;

  return (
    <ApolloClientQueryProvider configuration={configuration}>
      {logo}
    </ApolloClientQueryProvider>
  );

};

LogoQueryProvider.propTypes = {
  configuration: PropTypes.object.isRequired,
};

export default LogoQueryProvider;
