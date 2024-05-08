/*
 * Copyright Merative US L.P. 2024
 */

import "regenerator-runtime/runtime";

// eslint-disable-next-line import/no-unresolved
import sampleRenderers from "devenv_pkg/src";
// eslint-disable-next-line import/no-unresolved
import { renderers } from "custom_pkg/src";

// FIXME Is this used?
/*
   Use when the main bundle is not on the same level as the script calling it.
   Webpack will reference this path when emitting the chunks
*/
export const usePublicPath = async (path) => {
  if (path) {
    // eslint-disable-next-line camelcase, no-undef
    __webpack_public_path__ = path;
  }
};

// FIXME Eventually get rid of this...
/* Imports Carbon Addons dynamically */
const requireCustomCarbonAddons = async () => {
  const customCarbonAddons = await import(
    /* webpackChunkName: "simple" */ "../../custom-carbon-addons/src/apollo-client-hooks"
  );
  return customCarbonAddons;
};

// These items will become children of window.spmcustom
export { requireCustomCarbonAddons, renderers, sampleRenderers };
