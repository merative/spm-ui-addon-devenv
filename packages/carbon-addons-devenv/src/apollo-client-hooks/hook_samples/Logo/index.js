/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2020,2022. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/* eslint import/no-unresolved: [2, { ignore: ['devenv_pkg*.'] }] */
import { ApolloClientHookTemplate } from 'devenv_pkg/src/apollo-client-hooks';
import LogoDataProvider from './LogoDataProvider';

const LogoComponentApolloClientHook = (container, configuration) => {
  ApolloClientHookTemplate(container, configuration, LogoDataProvider);
};

export default LogoComponentApolloClientHook;
