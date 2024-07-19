module.exports = function (api) {
  // wrote a caller function to execute to transpile
  const isWebpack = api.caller(
    (caller) => caller && caller.name === "babel-loader",
  );
  const isCLI = api.caller((caller) => caller && caller.name === "@babel/cli");
  return {
    /**
     * TODO: Need to write tests for below
     * include, exclude, only, highlightCode, retainLines
     */
    // include: "./options/*.ts",
    // exclude: "./options/exclude.ts",
    // only: ["./options"],
    // highlightCode: true,
    // retainLines: false,

    presets: [
      [
        "@babel/preset-env",
        {
          targets: isCLI
            ? {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
              }
            : {
                edge: "10",
                firefox: "40",
                chrome: "40",
                safari: "5.1",
              },
        },
      ],
    ],
    overrides: [
      {
        test: "./options/overrides.ts",
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
      {
        test: "./vendor/large.min.js",
        compact: true,
      },
    ],
    env: {
      development: {
        plugins: [
          // Plugins for development
          // "react-refresh/babel", // Example plugin for hot reloading
        ],
      },
      production: {
        minified: true,
        plugins: [
          // Plugins for production
          "transform-remove-console", // Example plugin to remove console.log statements
        ],
      },
      test: {
        compact: true,
        plugins: [
          // Plugins for testing
          "dynamic-import-node", // Example plugin for dynamic imports in Node.js
        ],
      },
    },
    ignore: ["./options/ignore.ts"],
    /**
     * Need to check are these configs really required if we already using webpack to generate source
     * inputSourceMap option is used to provide an existing source map to Babel.
     * sourceMaps -> boolean | "inline" | "both"
     */
    inputSourceMap: true,
    sourceMaps: true,
    // assumptions: {
    //   iterableIsArray: true,
    // },
    /**
     * sourceType: "script": code does not use ES6 module syntax (import/export). A legacy code or code meant to run in a non-module environment.
     * sourceType: "module": code uses ES6 module syntax. This is common for modern JavaScript projects using ES modules.
     * @input "script" | "module" | "unambiguous"
     */
    sourceType: "script",
    comments: true,
    /**
     * Not recomended by babel -> Instead use some plugin
     */
    auxiliaryCommentBefore: `
      ------------------------------------------------------------
      This is a multi-line header comment added by Babel.
      Version: 1.0.0
      Author: Your Name
      ------------------------------------------------------------
    `,
    /**
     * Not recomended by babel -> Instead use some plugin
     */
    auxiliaryCommentAfter: `
      ------------------------------------------------------------
      This concludes the transpilation process by Babel.
      Visit https://babeljs.io/ for more information.
      ------------------------------------------------------------
    `,
  };
};
