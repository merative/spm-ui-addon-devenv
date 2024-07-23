/*
 * Copyright Merative US L.P. 2021, 2024
 */
import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line importPlugin/no-unresolved
import ApolloClientQueryProvider from "devenv_pkg/src/apollo-client-hooks/core/ApolloClientQueryProvider";
// eslint-disable-next-line importPlugin/no-unresolved
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
