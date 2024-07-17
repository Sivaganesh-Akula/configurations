const path = require("path");

module.exports = {
  /**
   * Single Entry (Shorthand) Syntax
   */
  // single entry file with string input file
  // entry: "./src/entry.js",

  // multiple entry files with array of input files
  // entry: ["./src/entry.js", "./src/entry2.js"],

  /**
   * Object Syntax
   */
  entry: {},

  mode: "development",
  devtool: false,
  output: {
    // single entry file with string input file
    // filename: "singleEntryString.js",

    // multiple entry files with array of input files
    // filename: "multiEntryArrOfString.js",

    path: path.resolve(__dirname, "dist"),
  },
};
