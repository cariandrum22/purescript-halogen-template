const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Halogen5 Template",
      filename: "index.html",
    }),
  ],
};
