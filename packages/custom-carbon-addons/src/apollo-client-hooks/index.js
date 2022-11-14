/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2021. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
/* eslint import/no-unresolved: [2, { ignore: ['devenv_pkg*.'] }] */
import { ApolloClientHooks } from 'devenv_pkg/src/apollo-client-hooks';
import * as CustomApolloClientHooks from './hooks/components';


// ApolloClientHooks object initially has the list of sample components to be renderered
// The custom appollo client hooks are automatically added to the sample ones below
// INSTRUCTIONS: Add custom ones to components/index.js (and/or feature/index.js)

const updatedApolloClientHooks = { ...ApolloClientHooks, ...CustomApolloClientHooks };

// eslint-disable-next-line import/prefer-default-export
export { updatedApolloClientHooks as ApolloClientHooks };
