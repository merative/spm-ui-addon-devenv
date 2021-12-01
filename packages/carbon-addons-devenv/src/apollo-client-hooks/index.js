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
import ReactDOM from 'react-dom';
import PeopleDataProvider from './hook_samples/Person';
import LogoDataProvider from './hook_samples/Logo';
import ApolloClientConfig from './core/ApolloClientConfig';
import ApolloClientDataProvider from './core/ApolloClientDataProvider';
import ApolloClientQueryProvider from './core/ApolloClientQueryProvider';
import Renderer from '../../sample_renderers/Renderer';
import settings from '../react';

const RenderWithApolloClient = (container, configuration, DataProvider) => {
  const apolloClient = ApolloClientConfig.getConfig(configuration);
  
  ReactDOM.render(
    React.createElement(DataProvider, {
      apolloClient,
      configuration
    }),
    container
  );
};

const RenderLogoWithApolloClient = (container, configuration) => {
  RenderWithApolloClient(container, configuration, LogoDataProvider);
};


const RenderPersonWithApolloClient = (container, configuration) => {
  RenderWithApolloClient(container, configuration, PeopleDataProvider);
};

// this is the the 2 sample apollo client compponents used
const RendererListWithApolloClient = { RenderLogoWithApolloClient, RenderPersonWithApolloClient };

export { RendererListWithApolloClient, RenderWithApolloClient, ApolloClientDataProvider, ApolloClientQueryProvider, Renderer, settings };
