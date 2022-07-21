---
title: Integrating components with the UIM page
description: Integrating components with the UIM page
---

Here's how to integrate a component with a UIM page with reference to the sample add-on components in the `carbon-addon-devenv` package.

1. Implement GraphQL to match the sample query. A GraphQL back-end service is needed to provide the data access for the sample components.
   For the components to display properly when integrated in a UIM page, You must implement a GraphQL query in Social Program Management.
   The query must match the data that is expected in the front-end queries of the sample components.
2. Reference the sample Query Providers, which are available in the `apollo-client-hooks/index.sample` file.
   You must reference them in an `index.js` file in this directory to be able to integrate them.
3. Reference the sample Sass. To enable the look and feel for the sample components,
   uncomment the commented line in the `scss/index.scss` file.
4. Build and integrate with the renderer.

   ```
   npm run build
   npm run dev
   ```