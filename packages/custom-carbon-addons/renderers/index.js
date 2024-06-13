/*
 * Copyright Merative US L.P. 2021, 2022
 */

// NOTE: the sample renderers are added to the 'window.spmcustom.sampleRenderers' object
// IMPORTANT: custom renderers added here will be added to the 'window.spmcustom.renderers' object

// INSTRUCTIONS:
// Just import your renderes like so
// (assuming you have renderers with matching directory names of 'MyComponent1' and 'MyComponent2'):

// Exporting (by uncommenting) these 2 renderers adds them to the 'window.spmcustom.renderers' list
// import MyComponent1 from './MyComponent1';
// import MyComponent2 from './MyComponent2';

// export default { MyComponent1, MyComponent2 };

import Alan1Renderer from "./Alan1Renderer";
import Alan2Renderer from "./Alan2Renderer";

export default { Alan1Renderer, Alan2Renderer };
