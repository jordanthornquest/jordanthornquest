// Import lit-html-server to render templates
const { html, renderToBuffer } = require("@popeindustries/lit-html-server");

// Create page data and render class
module.exports = class {
  // Assign data for page
  async data() {
    // Explicitly name permalink to avoid subfolder output
    return {
      layout: "base.11ty.js",
      permalink: "/404.html",
      title: "Oh fuck",
    };
  }

  async templateBuilder() {
    return html`
      <main class="container">
        <img
          alt="A fearsome dog-like creature sits on a mattress, its eyes glowing fearfully."
          class="mt-10"
          src="https://res.cloudinary.com/jordanthornquest/image/upload/c_scale,w_1000/v1621403580/Dog/run.webp"
        />
        <h1 class="mt-5">Bad news dude</h1>
        <p class="mt-3">This page doesn't exist, help. Help? Oh god.</p>
        <p class="mt-2">
          <a href="${this.url("/")}">Run home, get out while you can!</a>
        </p>
      </main>
    `;
  }

  // Render page contents
  async render() {
    const template = await this.templateBuilder();
    const renderedTemplate = await renderToBuffer(template);
    return renderedTemplate;
  }
};
