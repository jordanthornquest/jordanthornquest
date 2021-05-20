// RSS plugin for generating feeds from data
const pluginRss = require("@11ty/eleventy-plugin-rss");

// Sitemap plugin
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const sitemapConfig = {
  sitemap: {
    hostname: "https://example.com",
  },
};

// siteUrl constant for URL
const { siteUrl } = require("./src/_data/head");

// Import shortcodes
const shortcodes = require("./utils/shortcodes");

// Import transforms
const transforms = require("./utils/transforms");

// Export configuration
module.exports = function (eleventyConfig) {
  // Copy static files to output
  eleventyConfig.addPassthroughCopy({ "./src/_static/": "./static/" });

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

  // We will use the .eleventyignore instead
  eleventyConfig.setUseGitIgnore(false);

  // Return configuration object
  return {
    dir: {
      data: "./_data",
      includes: "./_includes",
      input: "./src",
      layouts: "./_layouts",
      output: "./dist",
    },
  };
};
