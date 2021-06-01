// Import lit-html-server to render templates
const { html } = require("@popeindustries/lit-html-server");

// Create page data and render class
module.exports = class {
  // Assign data for page
  async data() {
    return {
      landingImage: {
        default: {
          alt: "A photo of me, leaning forward, staring at the camera in a leather jacket.",
          height: 1000,
          src: "/_static/images/who-is-he-square.jpeg",
          width: 1000,
        },
        responsive: [
          {
            breakpoint: "md",
            height: 816,
            hiRes: true,
            src: "/_static/images/who-is-he-16-9.jpeg",
            width: 1462,
          },
        ],
      },
      layout: "base.11ty.js",
      title: "Home",
    };
  }

  // Render page contents
  async render({ landingImage, tailwind }) {
    // Get Tailwind breakpoints
    const { breakpoints } = tailwind;
    // Return the template
    return html`
      <main>
        <section>
          ${await this.picture(
            landingImage.default,
            landingImage.responsive,
            breakpoints
          )}
        </section>
      </main>
    `;
  }
};
