/*
 * Copyright Merative US L.P. 2020
 */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Ensure any error output to console is flagged as a failing test
global.console.error = (error) => {
  throw new Error(error);
};

Enzyme.configure({ adapter: new Adapter() });
