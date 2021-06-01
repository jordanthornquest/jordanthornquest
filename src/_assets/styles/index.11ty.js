// Use fs to read and write CSS files
const fs = require("fs");

// Use path to build the file path to entry file
const path = require("path");

// Use PostCSS for CSS processing
const postcss = require("postcss");

// Use CleanCSS for minification
const CleanCSS = require("clean-css");

// Use postcss-import for file breakup
const postCssImport = require("postcss-import");

// Autoprefixer plugin for browser compatibility
const autoprefixer = require("autoprefixer");

// Tailwind CSS for utility classes
const tailwindcss = require("tailwindcss");

// Export class with configuration for processing
module.exports = class {
  // Define data for use in render()
  async data() {
    // Return data to use for rendering
    return {
      // Don't include this file in collections
      eleventyExcludeFromCollections: true,
      eleventyComputed: {
        entryPath: (data) =>
          path.join(__dirname, `./src/${data.assets.cssEntryFile}`),
      },
      // This is where the CSS output will go
      permalink: (data) => `/_assets/styles/styles.${data.assets.hashString}.css`,
    };
  }

  // Define compile function
  async compile(entryPath) {
    try {
      // Get raw CSS from file
      const rawCss = fs.readFileSync(entryPath);

      // Process raw CSS with PostCSS
      const processedCss = await postcss([
        postCssImport,
        autoprefixer,
        tailwindcss,
      ]).process(rawCss, { from: entryPath });

      // Get the processed CSS string
      const result = processedCss.css;

      // Return the string
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Minify CSS on production
  async minify(css) {
    return new Promise((resolve, reject) => {
      if (process.env.NODE_ENV === "production") {
        const minified = new CleanCSS().minify(css);
        if (!minified.styles) {
          return reject(minified.error);
        }
        resolve(minified.styles);
      } else {
        resolve(css);
      }
    });
  }

  // Process raw CSS with PostCSS and return the result as a string
  async render({ entryPath }) {
    const css = await this.compile(entryPath);
    const result = await this.minify(css);
    return result;
  }
};
