// Import lit-html-server to render templates
const { html, renderToString } = require("@popeindustries/lit-html-server");

// Import path for building pageFullUrl
const path = require("path");

// Contents for the page
const pageContents = html`
  <main class="container mt-5">
    <h1>Reconstructing, be back soon.</h1>
    <p class="mt-2">
      For the time being, check out my
      <a href="https://music.jordanthornquest.com">Bandcamp</a>. See you
      shortly!
    </p>
  </main>
`;

// Data for the page
const pageData = {
  description:
    "Jordan Thornquest maps his mindstate with theatrical relish & a form of punk-informed power pop that's both candidly introspective and fearlessly extroverted.",
  layout: "base.11ty.js",
  socialImage:
    "https://res.cloudinary.com/deedobzcr/image/upload/q_auto,f_auto,w_1200/v1559763975/hurr.jpg",
  title: "Home",
  eleventyComputed: {
    pageFullUrl: (data) => path.join(data.constants.siteUrl, data.page.url),
  },
};

// Create page data and render class
class Home {
  // Assign data for page
  async data() {
    return pageData;
  }

  // Render page contents
  async render() {
    return renderToString(pageContents);
  }
}

// Export class to Eleventy
module.exports = Home;
