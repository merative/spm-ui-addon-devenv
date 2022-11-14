/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2021. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import { gql, useQuery } from '@apollo/client';

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
}

export {
  GetPersons,
  useGetPersons,
};
