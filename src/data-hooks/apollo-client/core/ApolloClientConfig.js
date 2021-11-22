/*
 * Licensed Materials - Property of IBM
 *
 * PID 5725-H26
 *
 * Copyright IBM Corporation 2021. All Rights Reserved.
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

let csrfToken;

class ApolloClientConfig {
  static serverURL = process.env.GRAPHQL_SERVER_URL || 'http://localhost:4000/graphql';

  static csrfTokenHeader = process.env.CSRF_TOKEN_REQUEST_HEADER || 'X-IBM-SPM-CSRF';

  static csrfTokenEndpoint = process.env.CSRF_TOKEN_ENPOINT || 'Rest/v1/csrf/tokens';

  /**
   * Gets the CSRF HTTP Header name as configured and to be added to GraphQL requests with tokens.
   *
   * @static
   * @returns {String} The CSRF HTTP Header name as configured as node environment variable.
   * @memberof ApolloClientConfig
   * @private
   */
  static getCSRFRequestHeaderName = () => {
    return process.env.CSRF_TOKEN_REQUEST_HEADER;
  }
  
   /**
   * Gets the CSRF token by making a call to the configured REST endpoint.
   *
   * @static
   * @returns {String} The CSRF token.
   * @memberof ApolloClientConfig
   * @private
   */
  static getCSRFToken = async  () => {  
    const response = await fetch('/Rest/v1/csrf/tokens', {});
    const token = await response.headers.get(this.csrfTokenHeader);
    return token;
  }

 /**
   * Gets the http endpoint for GraphQL with basic configuration.
   *
   * @static
   * @returns {Object} The GrpahQL enpoint
   * @memberof ApolloClientConfig
   * @private
   */
  static getHttpLink = () => {
    return createHttpLink({
      uri: this.serverURL,
    });
  };

  /**
   * Adds the CSRF request header with token to the existing headers of each GraphQL request.
   *
   * @static
   * @returns {Object} The headers on the GraphQL request.
   * @memberof ApolloClientConfig
   * @private
   */
  static addCSRFHeaderToRequest = (headers, crfToken) => {
    return {
      headers: {
        ...headers,
        [this.csrfTokenHeader]: crfToken ? `${crfToken}` : "",
      }
    }
  };

  /**
   * Gets the http endpoint for each GraphQL with CSRF header and token.
   *
   * @static
   * @returns {Object} The GrpahQL enpoint
   * @memberof ApolloClientConfig
   * @private
   */
  static getCSRFLink = () => {  
    return setContext(async(_, { headers }) => {
      // return the headers to the context so httpLink can read them
      if (!csrfToken) {
        csrfToken = await this.getCSRFToken();
      }
      return this.addCSRFHeaderToRequest(headers, csrfToken);
    });
  };


   /**
   * Gets the Apollo Client configuration depdending on the configuration from the renderers.
   *
   * @static
   * @returns {Object} The Apollo Client Configuration.
   * @memberof ApolloClientConfig
   * @private
   */
  static getConfig = (configuration) => {
    const { security } = configuration;
    const isCsrfEnabled = security && security.csrf && security.csrf.enabled === 'true';
    const httpLink = this.getHttpLink();
  return new ApolloClient({
    link: isCsrfEnabled ? this.getCSRFLink().concat(httpLink) : httpLink,
    headers: {
      'Accept-Language': configuration.locale,
    },
    cache: new InMemoryCache()
   });
  }
}
export default ApolloClientConfig;
