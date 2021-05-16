// Entry file name
const ENTRY_FILE_NAME = "styles.css";

// Use fs to read and write CSS files
const fs = require("fs");

// Use path to build the file path to entry file
const path = require("path");

// Use PostCSS for CSS processing
const postcss = require("postcss");

// Autoprefixer plugin for browser compatibility
const autoprefixer = require("autoprefixer");

// Tailwind CSS for utility classes
const tailwindcss = require("tailwindcss");

// Export class with configuration for processing
module.exports = class {
  async data() {
    // Create path to styles.css
    const entryPath = path.join(__dirname, `/${ENTRY_FILE_NAME}`);

    // Return data to use for rendering
    return {
      // Don't include this file in collections
      eleventyExcludeFromCollections: true,
      entryPath,
      // This is where the CSS output will go
      permalink: `/styles/styles.css`,
      // Use fs to open our raw CSS for processing
      // Use synchronous to make sure this data is retrieved first
      rawCss: fs.readFileSync(entryPath),
    };
  }

  // Process raw CSS with PostCSS and return the result as a string
  async render({ entryPath, rawCss }) {
    return await postcss([autoprefixer, tailwindcss])
      .process(rawCss, { from: entryPath })
      .then((result) => result.css);
  }
};
