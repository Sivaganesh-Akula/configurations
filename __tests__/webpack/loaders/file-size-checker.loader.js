// file-size-check-loader.js
const fs = require("fs");
const path = require("path");

module.exports = function (source) {
  const filePath = this.resourcePath;
  const fileSize = fs.statSync(filePath).size;

  console.log("File Size: " + fileSize);

  const maxSize = 100 * 1024; // 100 KB
  if (fileSize > maxSize) {
    throw new Error(
      `${path.basename(filePath)} exceeds the size limit of 100KB.`,
    );
  }

  return source;
};
