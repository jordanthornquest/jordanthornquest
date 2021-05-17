// Use fs to read asset files
const fs = require("fs");

// Use path to build the file path to entry file
const path = require("path");

// Use MD5 for hash generation
const md5 = require("md5");

// CSS variables
const cssEntryFile = "styles.css";

// Create hash from entry file

// Export data for use
module.exports = async function () {
  return {
    cssEntryFile,
  };
};
