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
    logo(logoId: $logoId) {
      name
    }
  }
`;

const useGetLogo = (logoIdValue) => {
  return useQuery(GetLogo, {
    variables: { logoId: logoIdValue },
  });
}

export {
  GetLogo,
  useGetLogo,
};
