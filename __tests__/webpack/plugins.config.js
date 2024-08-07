const path = require("path");
const LogBuildPlugin = require("./plugins/build-log-plugin");
const { ProgressPlugin } = require("webpack");

module.exports = {
  entry: "../src/javascript/main.js",

  mode: "development",
  devtool: false,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new ProgressPlugin(),
    new LogBuildPlugin({ test: "sample option" }),
  ],
};
