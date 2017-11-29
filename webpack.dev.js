var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");
var webpack = require("webpack");

module.exports = {
  devtool: "cheap-module-source-map",
  entry: ["babel-polyfill", "./src/index"],
  watch: true,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },

  devServer: {
    port: 4040,
    host: "localhost",
    historyApiFallback: true,
    noInfo: true,
    stats: "minimal",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]"
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
