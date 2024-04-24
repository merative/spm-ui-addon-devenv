/*
 * Copyright Merative US L.P. 2020, 2024
 */

// eslint-disable-next-line import/no-unresolved
import { ApolloClientHookTemplate } from "devenv_pkg/src/apollo-client-hooks";
import LogoDataProvider from "./LogoDataProvider";

const LogoComponentApolloClientHook = (container, configuration) => {
  ApolloClientHookTemplate(container, configuration, LogoDataProvider);
};

export default LogoComponentApolloClientHook;
