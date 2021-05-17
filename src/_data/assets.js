// Use fs to read asset files
const fs = require("fs");

// Use fast-glob for getting files for hashing
const glob = require("fast-glob");

// Use path to build the file path to entry file
const path = require("path");

// Use MD5 for hash generation
const md5 = require("md5");

// CSS variables
const cssEntryFile = "styles.css";
const cssEntryDir = path.join(__dirname, "../", "_assets/", "styles/");

// Create hash from entry file
const cssHash = function (dir) {
  const cssFiles = glob.sync([`${dir}/**/*.css`]);
  const cssContent = cssFiles
    .map((cssFile) => fs.readFileSync(cssFile))
    .join("");
  return md5(cssContent).slice(0, 8);
};

// Export data for use
module.exports = async function () {
  // Generate hash
  const generatedCssHash = cssHash(cssEntryDir);

  // Return data
  return {
    cssEntryFile,
    generatedCssHash,
  };
};
