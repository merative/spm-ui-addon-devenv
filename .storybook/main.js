const custom = require("../webpack.config.js");

module.exports = {
  stories: [
    "../packages/**/*.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-webpack5-compiler-babel",
  ],

  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        rules: custom.module.rules,
      },
      resolve: {
        ...config.resolve,
        ...custom.resolve,
      },
      core: {
        disableTelemetry: true,
      },
    };
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},
};
