/*
 * Copyright Merative US L.P. 2020
 */

// Ensure any error output to console is flagged as a failing test
global.console.error = (error) => {
  throw new Error(error);
};
