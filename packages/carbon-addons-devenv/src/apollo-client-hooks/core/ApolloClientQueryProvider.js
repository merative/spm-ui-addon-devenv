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
import InlContext from '../../react/core/InlContext';

const ApolloClientQueryProvider = ({configuration, children}) => {

  const { locale, dateFormat, labels } = configuration;
  return (
    <InlContext.Provider
      value={{
        locale,
        labels,
        dateFormat: dateFormat.toUpperCase()
      }}
    >
     {children}
    </InlContext.Provider>
  );
  
};

ApolloClientQueryProvider.propTypes = {
  configuration: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};



export default ApolloClientQueryProvider;
