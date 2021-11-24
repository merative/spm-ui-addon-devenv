
import "../../custom-carbon-addons/src/scss/index.scss";
import 'regenerator-runtime/runtime';
import { renderers } from './staticExports';

 import {
    requireCustomCarbonAddons,
  } from './dynamicExports';

  export default  { requireCustomCarbonAddons, renderers };

  