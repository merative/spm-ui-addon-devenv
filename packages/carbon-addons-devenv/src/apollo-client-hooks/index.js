/*
 * Copyright Merative US L.P. 2020
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PersonComponentApolloClientHook from './hook_samples/Person';
import LogoComponentApolloClientHook from './hook_samples/Logo';
import ApolloClientConfig from './core/ApolloClientConfig';
import ApolloClientDataProvider from './core/ApolloClientDataProvider';
import ApolloClientQueryProvider from './core/ApolloClientQueryProvider';
import Renderer from '../../sample_renderers/Renderer';
import { settings } from '../react';

/**
 * Contains a list of all the custom appolo client hooks with components
 * and features that can be rendered in the application usrt interface.
 * @param {*} container The element.
 * @param {*} configuration The apollo client configuration
 * @param {*} DataProvider The apollo data provider
 */
const ApolloClientHookTemplate = (container, configuration, DataProvider) => {
  const apolloClient = ApolloClientConfig.getConfig(configuration);
  
  ReactDOM.render(
    React.createElement(DataProvider, {
      apolloClient,
      configuration
    }),
    container
  );
};

// sample apollo client compponents used
const SampleApolloClientHooks = { LogoComponentApolloClientHook, PersonComponentApolloClientHook };

// ApolloClientHookTemplate,  ApolloClientDataProvider, ApolloClientQueryProvider, Renderer are all apollo client helper objects that
// need to be referened in custom-carbon-addons package
export { SampleApolloClientHooks as ApolloClientHooks, ApolloClientHookTemplate, ApolloClientDataProvider, ApolloClientQueryProvider, Renderer, settings };
