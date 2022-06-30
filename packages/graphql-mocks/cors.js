/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
/* eslint no-console: ["off"] */

/**
 * Sets the CORS configuration for the Mock Server.
 *
 * @param {any} req request
 * @param {any} res response
 * @param {any} next next middleware call
 */
const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header(
    'Access-Control-Allow-Headers',
    '*'
  );
  res.header(
    'Access-Control-Expose-Headers',
    '*'
  );
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
};

module.exports = cors;
