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
import { ApolloProvider } from '@apollo/client';

const ApolloClientDataProvider = ({ apolloClient, children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};

ApolloClientDataProvider.propTypes = {
  apolloClient: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
}


export default ApolloClientDataProvider;
