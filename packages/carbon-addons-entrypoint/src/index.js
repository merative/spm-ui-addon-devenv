/*
 * Copyright Merative US L.P. 2024
 */

import "regenerator-runtime/runtime";

// eslint-disable-next-line importPlugin/no-unresolved
import sampleRenderers from "devenv_pkg/src";
// eslint-disable-next-line importPlugin/no-unresolved
import renderers from "custom_pkg/src";

/* Imports Carbon Addons dynamically */
const requireCustomCarbonAddons = async () => {
  const customCarbonAddons = await import(
    /* webpackChunkName: "simple" */ "../../custom-carbon-addons/src/apollo-client-hooks"
  );
  return customCarbonAddons;
};

// These items will become children of window.spmcustom
export { requireCustomCarbonAddons, renderers, sampleRenderers };
