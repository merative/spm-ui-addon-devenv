import "./scss/index.scss";
import 'regenerator-runtime/runtime';
import { renderers } from './staticExports';

 import {
    requireCustomCarbonAddons,
  } from './dynamicExports';


  export default  { requireCustomCarbonAddons, renderers };

  // export { default as requireCustomCarbonAddons } from requireCustomCarbonAddons;

  