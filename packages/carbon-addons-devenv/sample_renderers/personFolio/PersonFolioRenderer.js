/*
 * Copyright Merative US L.P. 2021, 2024
 */

// eslint-disable-next-line importPlugin/no-unresolved
import { Renderer } from "devenv_pkg/src/apollo-client-hooks";

const render = async (containerId, config) => {
  Renderer.create(containerId, config, "PersonComponentApolloClientHook");
};

export default render;
