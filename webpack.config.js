const path = require("path");
const webpack = require("webpack");
const ReactDevToolsIFramePlugin = require("react-dev-tools-iframe-webpack-plugin");

module.exports = {
  entry: [
    "./public-path.js",
    "./packages/carbon-addons-entrypoint/src/index.js",
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["node_modules"],
              },
            },
          },
        ],
        include: [
          path.resolve(__dirname, "./packages/carbon-addons-devenv/src/scss"),
          path.resolve(__dirname, "./packages/custom-carbon-addons/src/scss"),
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: "file-loader",
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      "RELATIVE_PATH_TO_BUNDLE",
      "GRAPHQL_SERVER_URL",
      "CUSTOM_COMPONENT_NAME",
      "CSRF_TOKEN_REQUEST_HEADER",
      "CSRF_TOKEN_ENPOINT",
    ]),
    new ReactDevToolsIFramePlugin(),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      devenv_pkg: path.resolve("./packages/carbon-addons-devenv"),
      custom_pkg: path.resolve("./packages/custom-carbon-addons"),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    library: "spmcustom",
    publicPath: "/dist/",
    filename: "spm-custom-carbon-addons-[name].bundle.js",
    chunkFilename: "spm-custom-carbon-addons-[name].chunk.js",
  },
  watchOptions: {
    poll: 400,
    ignored: "**/node_modules",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: false,
  },
};
