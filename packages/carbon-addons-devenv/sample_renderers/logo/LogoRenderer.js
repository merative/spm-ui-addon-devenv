/* eslint-disable no-undef */
/* eslint-disable no-console */
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
import Renderer from '../Renderer';

const render = async (containerId, config) => {
  Renderer.create(containerId, config, 'RenderLogoWithApolloClient');
};

export default render;
