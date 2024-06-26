/*
 * Copyright Merative US L.P. 2022, 2024
 */
// NOTE:
// If you want to use Renderer in the custom-carbon-addons package use the following import:
// import { Renderer } from 'devenv_pkg/src/apollo-client-hooks';
// eslint-disable-next-line importPlugin/no-unresolved
import { Renderer } from "devenv_pkg/src/apollo-client-hooks";

const render = async (containerId, config) => {
  Renderer.create(containerId, config, "LogoComponentApolloClientHook");
};

export default render;
