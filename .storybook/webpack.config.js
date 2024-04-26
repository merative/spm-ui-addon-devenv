const path = require("path");
const glob = require("glob");
const custom = require("../webpack.config.js");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../"),
  });

  return {
    ...config,
    module: { ...config.module },
    devServer: custom.devServer,
  };
};
