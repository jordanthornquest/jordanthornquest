module.exports = (eleventyConfig) => {
  // Return config object
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "dist",
    },
  };
};
