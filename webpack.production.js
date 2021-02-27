const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  entry: "./environment/production/index.js",
  output: {
    path: path.resolve(__dirname, "build/production"),
  },
  devServer: {
    contentBase: path.join(__dirname, "build/production"),
    hot: true,
    compress: true,
    port: 9000,
  },
});
