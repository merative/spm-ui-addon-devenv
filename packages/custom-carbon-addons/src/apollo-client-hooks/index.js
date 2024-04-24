/*
 * Copyright Merative US L.P. 2021, 2024
 */
// eslint-disable-next-line import/no-unresolved
import { ApolloClientHooks } from "devenv_pkg/src/apollo-client-hooks";
import * as CustomApolloClientHooks from "./hooks/components";

// ApolloClientHooks object initially has the list of sample components to be renderered
// The custom appollo client hooks are automatically added to the sample ones below
// INSTRUCTIONS: Add custom ones to components/index.js (and/or feature/index.js)

const updatedApolloClientHooks = {
  ...ApolloClientHooks,
  ...CustomApolloClientHooks,
};

// eslint-disable-next-line import/prefer-default-export
export { updatedApolloClientHooks as ApolloClientHooks };
