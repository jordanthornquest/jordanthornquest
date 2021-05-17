// Import lit-html-server to render templates
const { html, renderToString } = require("@popeindustries/lit-html-server");

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
  layout: "base.11ty.js",
  title: "Home",
};

// Create page data and render class
module.exports = class {
  // Assign data for page
  async data() {
    return pageData;
  }

  // Render page contents
  async render() {
    return renderToString(pageContents);
  }
};
