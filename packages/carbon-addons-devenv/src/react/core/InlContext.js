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

import React from 'react';

const InlContext = React.createContext({
  labels: undefined,
  locale: undefined,
  dateFormat: undefined,
});

export default InlContext;
