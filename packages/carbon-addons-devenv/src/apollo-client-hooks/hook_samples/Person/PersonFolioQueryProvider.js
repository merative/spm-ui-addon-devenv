/*
 * Copyright Merative US L.P. 2021, 2024
 */
import React from "react";
import PropTypes from "prop-types";
// NOTE:
// If you want to use ApolloClientQueryProvider in the custom-carbon-addons package use the following import:
// import { ApolloClientQueryProvider } from 'devenv_pkg/src/apollo-client-hooks';
// eslint-disable-next-line import/no-unresolved
import ApolloClientQueryProvider from "devenv_pkg/src/apollo-client-hooks/core/ApolloClientQueryProvider";
// eslint-disable-next-line import/no-unresolved
import PersonFolio from "devenv_pkg/src/react/addons_samples/PersonFolio/PersonFolio";
import { useGetPersons } from "./PersonQuery";

const PersonFolioQueryProvider = ({ configuration }) => {
  const propertyName = "persons";
  const { data } = useGetPersons();
  // 'persons' from graphql query is an array so return as list
  const personToRender = (
    <>
      {data &&
        data[propertyName].map((person) => (
          <PersonFolio
            key={person.id}
            firstname={person.firstname}
            surname={person.surname}
            age={person.age}
          />
        ))}
    </>
  );

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
