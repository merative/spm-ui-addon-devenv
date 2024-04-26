/*
 * Copyright Merative US L.P. 2020
 */

import React from "react";
import PropTypes from "prop-types";
import { ApolloProvider } from "@apollo/client";

const ApolloClientDataProvider = ({ apolloClient, children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

ApolloClientDataProvider.propTypes = {
  apolloClient: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default ApolloClientDataProvider;
