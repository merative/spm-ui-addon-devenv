/*
 * Copyright Merative US L.P. 2021, 2022
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
