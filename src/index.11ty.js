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
      <main>
        <section>
          <picture>
            <img
              alt="A photo of me, leaning forward, staring at the camera in a leather jacket."
              src="/images/start/who-is-he-square.jpeg"
            />
          </picture>
        </section>
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
