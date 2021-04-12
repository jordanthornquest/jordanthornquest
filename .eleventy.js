module.exports = function (eleventyConfig) {
  // Copy static files to output
  eleventyConfig.addPassthroughCopy({ "static/": "/" });

  // Copy temporary CSS when watching
  eleventyConfig.addPassthroughCopy({
    "eleventy/css/styles.css": "/css/styles.css",
  });

  // Return configuration object
  return {
    dir: {
      data: "_data",
      includes: "_includes",
      input: "eleventy",
      layouts: "_layouts",
      output: "dist",
    },
  };
};
