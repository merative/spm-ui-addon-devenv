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
import LogoQueryProvider from './LogoQueryProvider';
import ApolloClientDataProvider from '../../core/ApolloClientDataProvider';

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