// use outdent to make sure there's no leading indentation
const outdent = require("outdent");

// Export robots
module.exports = class {
  // Output to robots.txt
  // Don't include this file in collections
  async data() {
    return {
      permalink: "/robots.txt",
      layout: null,
      eleventyExcludeFromCollections: true,
    };
  }

  // Render robots.txt
  async render({ head }) {
    return outdent`
      User-agent: *
      Allow: /

      Sitemap: ${head.siteUrl}/sitemap.xml
    `;
  }
};
