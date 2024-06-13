import "../packages/carbon-addons-devenv/src/scss/index.scss";
import "../packages/custom-carbon-addons/src/scss/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
