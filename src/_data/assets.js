// CSS variables
const cssEntryFile = "styles.css";

// JS variables
const jsEntryFile = "index.js";

// Generate hash string from current date
const hash = Date.now();
const hashString = hash.toString();

// Export data for use
module.exports = async function () {
  // Return data
  return {
    cssEntryFile,
    hashString,
    jsEntryFile,
  };
};
