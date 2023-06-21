/*
 * Copyright Merative US L.P. 2021, 2022
 */
/* eslint import/no-unresolved: [2, { ignore: ['devenv_pkg*.'] }] */
import { ApolloClientHookTemplate } from 'devenv_pkg/src/apollo-client-hooks';
import PersonDataProvider from './PersonDataProvider';

const PersonComponentApolloClientHook = (container, config) => {
  ApolloClientHookTemplate(container, config, PersonDataProvider);
}

export default PersonComponentApolloClientHook;
