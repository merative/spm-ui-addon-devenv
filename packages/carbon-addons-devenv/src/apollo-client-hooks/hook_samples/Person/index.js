/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2021,2022. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
/* eslint import/no-unresolved: [2, { ignore: ['devenv_pkg*.'] }] */
import { ApolloClientHookTemplate } from 'devenv_pkg/src/apollo-client-hooks';
import PersonDataProvider from './PersonDataProvider';

const PersonComponentApolloClientHook = (container, config) => {
  ApolloClientHookTemplate(container, config, PersonDataProvider);
}

export default PersonComponentApolloClientHook;
