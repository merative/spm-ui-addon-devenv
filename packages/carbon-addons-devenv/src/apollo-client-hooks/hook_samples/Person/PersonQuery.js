/*
 * Copyright Merative US L.P. 2021
 */

import { gql, useQuery } from "@apollo/client";

const GetPersons = gql`
  query GetPerson {
    persons {
      id
      firstname
      surname
      age
    }
  }
`;

const useGetPersons = () => {
  return useQuery(GetPersons);
};

export { GetPersons, useGetPersons };
