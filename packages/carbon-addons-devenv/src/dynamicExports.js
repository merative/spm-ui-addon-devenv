
/*
   Use when the main bundle is not on the same level as the script calling it.
   Webpack will reference this path when emitting the chunks
*/
export const usePublicPath = async (path) => {
    if (path) {
      __webpack_public_path__ = path; // eslint-disable-line
    }
  };


/* Imports Carbon Addons dynamically */
export const requireCustomCarbonAddons = async () => {
    const customCarbonAddons = await import(
        /* webpackChunkName: "simple" */ '../../custom-carbon-addons/src/data-hooks/apollo-client'
    );
    return customCarbonAddons;
  };