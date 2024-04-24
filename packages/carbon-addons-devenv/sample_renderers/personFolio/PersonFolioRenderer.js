/*
 * Copyright Merative US L.P. 2021, 2024
 */
// NOTE: from custom-carbon-addons package reference to Renderer would be he following
// import { Renderer } from 'devenv_pkg/src/apollo-client-hooks';
// eslint-disable-next-line import/no-unresolved
import { Renderer } from "devenv_pkg/src/apollo-client-hooks";

const render = async (containerId, config) => {
  Renderer.create(containerId, config, "PersonComponentApolloClientHook");
};

export default render;
