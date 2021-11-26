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
import { RendererListWithApolloClient, RenderWithApolloClient, ApolloClientDataProvider, ApolloClientQueryProvider, Renderer } from '../../../carbon-addons-devenv/src/apollo-client-hooks';

// RendererListWithApolloClient has the list of components to be renderered withh Apollo Client
// can be used with Renderer.create() 
// Add your custom apollo client compoents to RendererListWithApolloClient, see RenderLogoWithApolloClient and RenderPersonWithApolloClient samples for details

export { RendererListWithApolloClient , RenderWithApolloClient, ApolloClientDataProvider, ApolloClientQueryProvider, Renderer };