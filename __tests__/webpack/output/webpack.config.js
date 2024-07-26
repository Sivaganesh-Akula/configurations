const path = require("path");

module.exports = {
  /**
   * Single Entry (Shorthand) Syntax
   */
  // single entry file with string input file
  // entry: "../../src/javascript/basicCalc.js",

  /**
   * Object Syntax
   */
  // basic entry without description object
  entry: {
    basicCalc: "../src/javascript/basicCalc.js",
    trigonometryTable: "../src/javascript/trigonometryTable.js",
  },

  mode: "development",
  devtool: false,
  output: {
    // single entry file with string input file
    // filename: "singleEntryString.js",

    // basic entry without description object
    filename: "[name].objectSyntaxBasicEntry.js",

    // TODO: publicPath

    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
