/*
 * Copyright Merative US L.P. 2021, 2024
 */
import React from "react";
import PropTypes from "prop-types";
// NOTE:
// from custom-carbon-addons package reference to ApolloClientDataProvider  would be he following
// import { ApolloClientDataProvider } from 'devenv_pkg/src/apollo-client-hooks';
// eslint-disable-next-line import/no-unresolved
import ApolloClientDataProvider from "devenv_pkg/src/apollo-client-hooks/core/ApolloClientDataProvider";
import PersonFolioQueryProvider from "./PersonFolioQueryProvider";

const PersonDataProvider = ({ configuration, apolloClient }) => {
  return (
    <ApolloClientDataProvider apolloClient={apolloClient}>
      <PersonFolioQueryProvider configuration={configuration} />
    </ApolloClientDataProvider>
  );
};

PersonDataProvider.propTypes = {
  configuration: PropTypes.object.isRequired,
  apolloClient: PropTypes.object.isRequired,
};

export default PersonDataProvider;
