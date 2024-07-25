class LogBuildPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    console.log(this.options.test);

    // Log when Webpack starts the build process
    compiler.hooks.compile.tap("LogBuildPlugin", (params) => {
      console.log(" Webpack is starting to compile...");
    });

    // Log when Webpack finishes the build process (successful or with errors)
    compiler.hooks.done.tap("LogBuildPlugin", (stats) => {
      console.log(" Webpack has finished compiling.");
      console.log(
        "Build stats:",
        stats.toString({
          colors: true,
          chunks: false,
          children: false,
          modules: false,
          maxModules: 0,
        }),
      );
    });

    // Log when there are build errors
    compiler.hooks.failed.tap("LogBuildPlugin", (error) => {
      console.error(" Build failed with error:", error);
    });
  }
}

module.exports = LogBuildPlugin;
