const path = require("path");

module.exports = {
  /**
   * Single Entry (Shorthand) Syntax
   */
  // single entry file with string input file
  // entry: "./src/basicCalc.js",

  // multiple entry files with array of input files
  // entry: ["./src/basicCalc.js", "./src/trigonometryTable.js"],

  /**
   * Object Syntax
   */
  // basic entry without description object
  // entry: {
  //   basicCalc: "./src/basicCalc.js",
  //   trigonometryTable: "./src/trigonometryTable.js",
  // },

  // object syntax entry with description object
  entry: {
    // If filename key is not available in output then the key given in entry is taken as output file name
    // example below utils is the the output filename generated
    dateUtils: "./src/dateUtils.js",
    stringUtils: "./src/stringUtils.js",
    main: {
      import: "./src/main.js",
      runtime: "main-runtime",
      // dependOn: "dateUtils",
      // file name given in entry itself instead of giving then in output
      // filename: "mainFileNameInEntry.objectSyntaxDescriptionEntry.js",
    },
    admin: {
      import: "./src/admin.js",
      dependOn: ["dateUtils", "stringUtils"],
      // requires to enable experiments: {outputModule: true}
      library: { name: "AdminLibrary", type: "amd" },
      // file name given in entry itself instead of giving then in output
      // filename: "adminFileNameInEntry.objectSyntaxDescriptionEntry.js",
    },
  },

  mode: "development",
  devtool: false,
  output: {
    // single entry file with string input file
    // filename: "singleEntryString.js",

    // multiple entry files with array of input files
    // filename: "multiEntryArrOfString.js",

    // basic entry without description object
    // filename: "[name].objectSyntaxBasicEntry.js",

    // object syntax entry with description object
    filename: "[name].objectSyntaxDescriptionEntry.js",

    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  experiments: {
    outputModule: true,
  },
};
