const path = require("path");
const LogBuildPlugin = require("./build-log-plugin");

module.exports = {
  entry: "../../src/javascript/main.js",

  // if entry requires typescript file
  // entry: "../../src/typescript/main.ts",

  mode: "development",
  devtool: false,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      // simple usage with loader with not much config
      // required config will be taken from explicitly added config file or defaults
      // {
      //   test: /\.js$/,
      //   use: "babel-loader",
      // },

      // Alternate add the loader config here itself
      // {
      //   test: /\.js$/,
      //  // any folder or files to be excluded
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: [
      //         [
      //           "@babel/preset-env",
      //           {
      //             targets: {
      //               edge: "10",
      //               firefox: "40",
      //               chrome: "40",
      //               safari: "5.1",
      //             },
      //           },
      //         ],
      //       ],
      //     },
      //   },
      // },

      // loader chaining
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: path.resolve(__dirname, "file-size-checker.loader.js"),
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, "console-log-loader.js"),
          },
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      edge: "10",
                      firefox: "40",
                      chrome: "40",
                      safari: "5.1",
                    },
                  },
                ],
              ],
            },
          },
          {
            loader: path.resolve(__dirname, "console-log-loader.js"),
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: "post",
        exclude: /node_modules/,
        use: path.resolve(__dirname, "file-size-checker.loader.js"),
      },
    ],
  },
};
