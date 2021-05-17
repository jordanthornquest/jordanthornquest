// Import lit-html-server to render templates
const { html, renderToBuffer } = require("@popeindustries/lit-html-server");

// Create page data and render class
module.exports = class {
  // Assign data for page
  async data() {
    return {
      layout: "base.11ty.js",
      title: "Home",
    };
  }

  async templateBuilder() {
    return html`
      <header class="md-5">
        <h1>Testing even harder</h1>
      </header>
    `;
  }

  // Render page contents
  async render() {
    const template = await this.templateBuilder();
    const renderedTemplate = await renderToBuffer(template);
    return renderedTemplate;
  }
};
