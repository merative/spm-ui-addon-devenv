/* eslint-disable no-undef */
/* eslint-disable no-console */
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
// NOTE: from custom-carbon-addons package reference to Renderer would be he following
// import { Renderer } from 'devenv_pkg/src/apollo-client-hooks';
import { Renderer } from 'devenv_pkg/src/apollo-client-hooks';

const render = async (containerId, config) => {
  Renderer.create(containerId, config, 'PersonComponentApolloClientHook');
};

export default render;
