import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import importPlugin from 'eslint-plugin-import';

export default [
  {
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    files: [
      "**/*.{js,mjs,cjs,jsx}"
    ],
    plugins: {
      importPlugin,
    },
    rules: {
      "importPlugin/no-unresolved": "error",
      "importPlugin/prefer-default-export": "error"
    }
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    files: [
      "**/__tests__/*.{js,mjs,cjs,jsx}"
    ],
    languageOptions: {
      globals: globals.jest
    }
  },
  {
    files: [
      ".storybook/*",
      "config/jest-setup.js",
      "config/jest.config.js",
      "packages/carbon-addons-devenv/src/apollo-client-hooks/core/ApolloClientConfig.js",
      "packages/carbon-addons-devenv/src/react/core/settings.js"
    ],
    languageOptions: {
      globals: globals.node
    }
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];
