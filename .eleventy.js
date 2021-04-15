module.exports = function (eleventyConfig) {
  // Copy static files to output
  eleventyConfig.addPassthroughCopy({ "static/": "/" });

  // Copy temporary CSS when watching
  eleventyConfig.addPassthroughCopy({
    "src/css/styles.css": "/css/styles.css",
  });

  // Return configuration object
  return {
    dir: {
      data: "_data",
      includes: "_includes",
      input: "src",
      layouts: "_layouts",
      output: "dist",
    },
  };
};
