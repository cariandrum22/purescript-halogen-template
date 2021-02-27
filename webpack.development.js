const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  entry: "./environment/development/index.js",
  output: {
    path: path.resolve(__dirname, "build/development"),
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "build/development"),
    hot: true,
    compress: true,
    port: 9000,
  },
});
