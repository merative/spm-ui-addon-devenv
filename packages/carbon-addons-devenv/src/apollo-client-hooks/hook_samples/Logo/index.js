/*
 * Copyright Merative US L.P. 2020, 2022
 */

/* eslint import/no-unresolved: [2, { ignore: ['devenv_pkg*.'] }] */
import { ApolloClientHookTemplate } from 'devenv_pkg/src/apollo-client-hooks';
import LogoDataProvider from './LogoDataProvider';

const LogoComponentApolloClientHook = (container, configuration) => {
  ApolloClientHookTemplate(container, configuration, LogoDataProvider);
};

export default LogoComponentApolloClientHook;
