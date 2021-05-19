module.exports = class {
  // Output to sitemap
  // Don't include this file in collections
  async data() {
    return {
      permalink: "/sitemap.xml",
      layout: null,
      eleventyExcludeFromCollections: true,
    };
  }

  // Render sitemap from sitemap plugin
  async render({ collections }) {
    return `${await this.sitemap(collections.all)}`;
  }
};
