/*
 * Copyright Merative US L.P. 2021, 2024
 */
// eslint-disable-next-line import/no-unresolved
import { ApolloClientHookTemplate } from "devenv_pkg/src/apollo-client-hooks";
import PersonDataProvider from "./PersonDataProvider";

const PersonComponentApolloClientHook = (container, config) => {
  ApolloClientHookTemplate(container, config, PersonDataProvider);
};

export default PersonComponentApolloClientHook;
