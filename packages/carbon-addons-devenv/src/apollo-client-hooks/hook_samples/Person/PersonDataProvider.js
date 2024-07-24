/*
 * Copyright Merative US L.P. 2021, 2024
 */
import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line importPlugin/no-unresolved
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
