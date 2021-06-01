// RSS plugin for generating feeds from data
const pluginRss = require("@11ty/eleventy-plugin-rss");

// Sitemap plugin
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const sitemapConfig = {
  sitemap: {
    hostname: "https://example.com",
  },
};

// Import shortcodes
const shortcodes = require("./utils/shortcodes");

// Import transforms
const transforms = require("./utils/transforms");

// Export configuration
module.exports = function (eleventyConfig) {
  // Copy static directory to output
  // Use _static/ in output to avoid path conflicts
  eleventyConfig.addPassthroughCopy({"./static/":"./_static/"});

  // Copy image files in input to output
  eleventyConfig.addPassthroughCopy("./src/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("./src/**/*.jpg");
  eleventyConfig.addPassthroughCopy("./src/**/*.png");

  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(sitemap, sitemapConfig);

  // Import components
  Object.keys(shortcodes).forEach((shortcodeName) => {
    eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName]);
  });

  // Import transforms
  Object.keys(transforms).forEach((transformName) => {
    eleventyConfig.addTransform(transformName, transforms[transformName]);
  });

  // Watch asset directories
  eleventyConfig.addWatchTarget("./src/_assets/");

  // Return configuration object
  return {
    dir: {
      data: "./_data", // Relative to input folder
      includes: "./_includes", // Relative to input folder
      input: "./src",
      layouts: "./_layouts", // Relative to input folder
      output: "./dist",
    },
  };
};
