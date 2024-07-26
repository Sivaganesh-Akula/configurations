const path = require("path");

module.exports = {
  /**
   * Single Entry (Shorthand) Syntax
   */
  // single entry file with string input file
  entry: "../../src/javascript/basicCalc.js",

  // multiple entry files with array of input files
  // entry: ["../../src/javascript/basicCalc.js", "../../src/javascript/trigonometryTable.js"],

  /**
   * Object Syntax
   */
  // basic entry without description object
  // entry: {
  //   basicCalc: "../../src/javascript/basicCalc.js",
  //   trigonometryTable: "../../src/javascript/trigonometryTable.js",
  // },

  // object syntax entry with description object
  // entry: {
  //   // If filename key is not available in output then the key given in entry is taken as output file name
  //   // example below utils is the the output filename generated
  //   dateUtils: "../../src/javascript/dateUtils.js",
  //   stringUtils: "../../src/javascript/stringUtils.js",
  //   main: {
  //     import: "../../src/javascript/main.js",
  //     runtime: "main-runtime",
  //     // dependOn: "dateUtils",
  //     // file name given in entry itself instead of giving then in output
  //     // filename: "mainFileNameInEntry.objectSyntaxDescriptionEntry.js",
  //   },
  //   admin: {
  //     import: "../../src/javascript/admin.js",
  //     dependOn: ["dateUtils", "stringUtils"],
  //     // requires to enable experiments: {outputModule: true}
  //     library: { type: "module" },
  //     // file name given in entry itself instead of giving then in output
  //     // filename: "adminFileNameInEntry.objectSyntaxDescriptionEntry.js",
  //   },
  // },

  mode: "development",
  devtool: false,
  output: {
    // single entry file with string input file
    filename: "singleEntryString.js",

    // multiple entry files with array of input files
    // filename: "multiEntryArrOfString.js",

    // basic entry without description object
    // filename: "[name].objectSyntaxBasicEntry.js",

    // object syntax entry with description object
    // filename: "[name].objectSyntaxDescriptionEntry.js",

    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // require if library type is module
  // Once enabled, webpack will output ECMAScript module syntax whenever possible.
  // experiments: {
  //   outputModule: true,
  // },
};
