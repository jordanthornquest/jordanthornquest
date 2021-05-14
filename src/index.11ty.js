// Import lit-html-server to render templates
const { html, renderToBuffer } = require("@popeindustries/lit-html-server");

// Render the page with a function
module.exports = async function (data) {
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

  return renderToBuffer(pageContents);
};
