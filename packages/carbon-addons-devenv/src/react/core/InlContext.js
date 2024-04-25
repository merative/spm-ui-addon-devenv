/*
 * Copyright Merative US L.P. 2020
 */

import React from "react";

const InlContext = React.createContext({
  labels: undefined,
  locale: undefined,
  dateFormat: undefined,
});

export default InlContext;
