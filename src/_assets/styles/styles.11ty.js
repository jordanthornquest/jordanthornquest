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
  // Define data for use in render()
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
    };
  }

  // Define compile function
  async compile(entryPath) {
    try {
      // Get raw CSS from file
      const rawCss = fs.readFileSync(entryPath);

      // Process raw CSS with PostCSS
      const processedCss = await postcss([autoprefixer, tailwindcss]).process(
        rawCss,
        { from: entryPath }
      );

      // Get the processed CSS string
      const result = processedCss.css;

      // Return the string
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Process raw CSS with PostCSS and return the result as a string
  async render({ entryPath }) {
    try {
      const css = await this.compile(entryPath);
      return css;
    } catch (error) {
      console.error(error);
    }
  }
};
