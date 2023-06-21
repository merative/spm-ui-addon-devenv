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
import PersonFolioQueryProvider from './PersonFolioQueryProvider';

const PersonDataProvider = ({ configuration, apolloClient }) => {
  return (
    <ApolloClientDataProvider apolloClient={apolloClient} >
      <PersonFolioQueryProvider configuration={configuration}/>
    </ApolloClientDataProvider>
  );
};

PersonDataProvider.propTypes = {
  configuration: PropTypes.object.isRequired,
  apolloClient: PropTypes.object.isRequired
}

export default PersonDataProvider;
