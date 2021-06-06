// Import lit-html-server to render templates
const { html, renderToBuffer } = require("@popeindustries/lit-html-server");

// Create page data and render class
module.exports = class {
  // Assign data for page
  async data() {
    // Explicitly name permalink to avoid subfolder output
    return {
      fearsome: {
        alt: "A fearsome dog-like creature sits on a mattress, its eyes glowing fearfully.",
        height: 750,
        src: "/_static/images/run.jpeg",
        sizes: [320, "sm", "md"],
        width: 1000
      },
      layout: "base.11ty.js",
      permalink: "/404.html",
      title: "Oh fuck",
    };
  }

  // Render page contents
  async render({ fearsome, tailwind }) {
    return html`
      <main class="container">
        ${this.image(tailwind.breakpoints, fearsome)}
        <h1 class="mt-5">Bad news dude</h1>
        <p class="mt-3">This page doesn't exist, help. Help? Oh god.</p>
        <p class="mt-2">
          <a href="${this.url("/")}">Run home, get out while you can!</a>
        </p>
      </main>
    `;
  }
};
