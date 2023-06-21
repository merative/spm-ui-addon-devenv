/*
 * Copyright Merative US L.P. 2020
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
