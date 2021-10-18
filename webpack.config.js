const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ['./public-path.js', "./src/index.js"],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, './src/scss'),
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
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    library: 'spmcustom',
    libraryExport: 'default',
    publicPath: "/dist/",
    filename: "custom-carbon-addons-[name].bundle.js",
    chunkFilename: 'custom-carbon-addons-[name].chunk.js',
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: false
  }
};