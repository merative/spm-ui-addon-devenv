/*
 * Copyright Merative US L.P. 2021, 2024
 */

// FIXME Delete this usePublicPath function
/*
   Use when the main bundle is not on the same level as the script calling it.
   Webpack will reference this path when emitting the chunks
*/
import renderers from "../renderers";

export const usePublicPath = async (path) => {
  if (path) {
    // eslint-disable-next-line camelcase, no-undef
    __webpack_public_path__ = path;
  }
};

export { renderers };
