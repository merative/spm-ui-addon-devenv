/*
 * Copyright Merative US L.P. 2021, 2024
 */
import React from "react";
import PropTypes from "prop-types";
// NOTE:
// If you want to use ApolloClientDataProvider in the custom-carbon-addons package use the following import:
// import { ApolloClientDataProvider } from 'devenv_pkg/src/apollo-client-hooks';
// eslint-disable-next-line import/no-unresolved
import ApolloClientDataProvider from "devenv_pkg/src/apollo-client-hooks/core/ApolloClientDataProvider";
import LogoQueryProvider from "./LogoQueryProvider";

const LogoDataProvider = ({ configuration, apolloClient }) => {
  return (
    <ApolloClientDataProvider apolloClient={apolloClient}>
      <LogoQueryProvider configuration={configuration} />
    </ApolloClientDataProvider>
  );
};

LogoDataProvider.propTypes = {
  configuration: PropTypes.object.isRequired,
  apolloClient: PropTypes.object.isRequired,
};

export default LogoDataProvider;
