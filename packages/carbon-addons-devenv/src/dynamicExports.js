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

/* Imports Carbon Addons dynamically */
export const requireCustomCarbonAddons = async () => {
  const customCarbonAddons = await import(
    /* webpackChunkName: "simple" */ "../../custom-carbon-addons/src/apollo-client-hooks"
  );
  return customCarbonAddons;
};
