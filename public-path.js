

// Path to SPMUIComponents directory (relative to WebContent folder).
const spmUIComponentsBaseURL =  process.env.RELATIVE_PATH_TO_BUNDLE;

// Retrieves Static Content Server from SPM.
//
// The serverRootURL is set on the root document window so if a js bundle
// is requested by a UIM iframe the parent window is checked instead.
const serverRootURL =
  window.curam || window.parent.curam
    ? window.curam.serverRootURL || window.parent.curam.serverRootURL || ''
    : '';

// If a Static Content Server URL is not set, '../' must be prepended to
// the URL to get the correct relative path.
const spmUIComponentsRootURL = serverRootURL
  ? spmUIComponentsBaseURL
  : `../${spmUIComponentsBaseURL}`;

// Concatenate the correct public path for use in webpack bundles.
const publicPath = `${serverRootURL}${spmUIComponentsRootURL}`;

export default __webpack_public_path__ = publicPath; // eslint-disable-line
