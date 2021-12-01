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

/**
 * Utility class exposing functions available against REST APIs.
 * @namespace Renderer
 */
export default class Renderer {

  /**
   * Creates a renderer.
   *
   * @static
   *
   * @memberof Renderer
   *
   * @private
   */
  static create = async (containerId, config, dataProvider, nameofUpdatedRendererList) => {
  window.spmcustom.requireCustomCarbonAddons()
    .then(async (RenderWithApolloClient) => {

      let apolloClientDataProvider;
      try {
        const nameOfRendererList = nameofUpdatedRendererList ? nameofUpdatedRendererList : 'RendererListWithApolloClient';
        const rendererList = RenderWithApolloClient[nameOfRendererList];
        apolloClientDataProvider = rendererList[dataProvider];
      } catch (e) {
        throw new Error('The apollo data provider : ' + dataProvider + " does not exist. This is the list of available ones: " + rendererList);
      }
      if (!apolloClientDataProvider) {
        throw new Error('The apollo data provider : ' + dataProvider + " does not exist. This is the list of available ones: " + rendererList);
      }
      apolloClientDataProvider(document.getElementById(containerId), {
        ...config,
        labels: {
          ...config.labels,
          ...config.messages,
        }
      });
    });
  }
}
