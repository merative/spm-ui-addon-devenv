/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2020. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Ensure any error output to console is flagged as a failing test
global.console.error = (error) => {
  throw new Error(error);
};

Enzyme.configure({ adapter: new Adapter() });
