/* eslint-disable no-undef */
/* eslint-disable no-console */
/*
 * Copyright Merative US L.P. 2022
 */
/* eslint import/no-unresolved: [2, { ignore: ['devenv_pkg*.'] }] */
// NOTE: from custom-carbon-addons package reference to Renderer would be he following
// import { Renderer } from 'devenv_pkg/src/apollo-client-hooks';
import { Renderer } from 'devenv_pkg/src/apollo-client-hooks';

const render = async (containerId, config) => {
  Renderer.create(containerId, config, 'LogoComponentApolloClientHook');
};

export default render;
