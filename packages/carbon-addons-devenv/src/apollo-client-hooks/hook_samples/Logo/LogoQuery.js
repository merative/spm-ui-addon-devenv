/*
 * Copyright Merative US L.P. 2021
 */
import { gql, useQuery } from "@apollo/client";

const GetLogo = gql`
  query GetLogo($logoId: String!) {
    logo(logoId: $logoId) {
      name
    }
  }
`;

const useGetLogo = (logoIdValue) => {
  return useQuery(GetLogo, {
    variables: { logoId: logoIdValue },
  });
};

export { GetLogo, useGetLogo };
