// Import lit-html-server to render templates
const { html, renderToBuffer } = require("@popeindustries/lit-html-server");

// Export component
module.exports = async function () {
  // Define template
  const hero = html``;

  // Render to buffer
  const renderedHero = await renderToBuffer(hero);

  // Return rendered buffer
  return renderedHero;
};
