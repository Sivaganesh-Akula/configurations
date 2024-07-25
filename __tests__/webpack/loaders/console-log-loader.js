module.exports = function (source) {
  console.log("\nProcessing file:", this.resourcePath);
  console.log("\n", source);
  return source;
};
