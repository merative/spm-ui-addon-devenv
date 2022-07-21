/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2021,2022. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
/* eslint import/no-unresolved: [2, { ignore: ['devenv_pkg*.'] }] */
import React from 'react';
import PropTypes from 'prop-types';
// NOTE: 
// from custom-carbon-addons package reference to ApolloClientDataProvider  would be he following
// import { ApolloClientDataProvider } from 'devenv_pkg/src/apollo-client-hooks';
import ApolloClientDataProvider from 'devenv_pkg/src/apollo-client-hooks/core/ApolloClientDataProvider';
import LogoQueryProvider from './LogoQueryProvider';


const LogoDataProvider = ({ configuration, apolloClient }) => {
  return (
    <ApolloClientDataProvider apolloClient={apolloClient} >
      <LogoQueryProvider configuration={configuration}/>
    </ApolloClientDataProvider>
  );
};

LogoDataProvider.propTypes = {
  configuration: PropTypes.object.isRequired,
  apolloClient: PropTypes.object.isRequired
}

export default LogoDataProvider;