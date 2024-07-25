module.exports = function (source) {
  console.log("\nProcessing file inline:", this.resourcePath);
  console.log("\n", source);
  return source;
};
