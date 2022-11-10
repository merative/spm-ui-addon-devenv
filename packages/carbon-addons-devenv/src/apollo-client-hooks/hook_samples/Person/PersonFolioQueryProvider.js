/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2021,2022. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
/* eslint import/no-unresolved: [2, { ignore: ['devenv_pkg*.'] }] */
import React from 'react';
import PropTypes from 'prop-types';
// NOTE: 
// from custom-carbon-addons package reference to ApolloClientQueryProvider would be he following
// import { ApolloClientQueryProvider } from 'devenv_pkg/src/apollo-client-hooks';
import ApolloClientQueryProvider from 'devenv_pkg/src/apollo-client-hooks/core/ApolloClientQueryProvider';
import PersonFolio  from 'devenv_pkg/src/react/addons_samples/PersonFolio/PersonFolio';
import { useGetPersons } from './PersonQuery';

const PersonFolioQueryProvider = ({ configuration }) => {
  const propertyName = 'persons';
  const { data } = useGetPersons();
  // 'persons' from graphql query is an array so return as list
  const personToRender = (<>{data && data[propertyName].map(person => (
    <PersonFolio key={person.id} firstname={person.firstname} surname={person.surname} age={person.age}/>
   ))}</>);

  if (!data) return <></>;

  return (
    <ApolloClientQueryProvider configuration={configuration}>
      {personToRender}
    </ApolloClientQueryProvider>
  );

};

PersonFolioQueryProvider.propTypes = {
  configuration: PropTypes.object.isRequired,
};

export default PersonFolioQueryProvider;
