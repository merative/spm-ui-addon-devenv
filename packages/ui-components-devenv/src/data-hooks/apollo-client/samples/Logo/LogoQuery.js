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

import { gql, useQuery } from '@apollo/client';

const GetLogo = gql`
  query GetLogo {
    logo(logoId: "id_2") {
      name
    }
  }
`;

const useGetLogo = () => {
  return useQuery(GetLogo);
}

export {
  GetLogo,
  useGetLogo,
};
