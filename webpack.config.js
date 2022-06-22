const path = require("path");
const webpack = require('webpack');



module.exports = {
  entry: ['./public-path.js', "./packages/carbon-addons-devenv/src/index.js"],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, './packages/custom-carbon-addons/src/scss'),
        // include: path.resolve(__dirname, '../../custom-carbon-addons/src/scss/index.scss'),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'file-loader',
      },
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['RELATIVE_PATH_TO_BUNDLE', 'GRAPHQL_SERVER_URL', 'CUSTOM_COMPONENT_NAME', 'CSRF_TOKEN_REQUEST_HEADER', 'CSRF_TOKEN_ENPOINT'])
  ],
  resolve: { extensions: ["*", ".js", ".jsx"], 
    alias: {
      devenv_pkg: path.resolve('./packages/carbon-addons-devenv')
    }
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    library: 'spmcustom',
    libraryExport: 'default',
    publicPath: "/dist/",
    filename: "spm-custom-carbon-addons-[name].bundle.js",
    chunkFilename: 'spm-custom-carbon-addons-[name].chunk.js',
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: false
  }
};