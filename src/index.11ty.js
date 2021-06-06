// Import lit-html-server to render templates
const { html } = require("@popeindustries/lit-html-server");

// Create page data and render class
module.exports = class {
  // Assign data for page
  async data() {
    return {
      landingPicture: {
        default: {
          alt: "A photo of me, leaning forward, staring at the camera in a leather jacket.",
          height: 1000,
          src: "/_static/images/who-is-he-square.png",
          sizes: ["md", 320],
          width: 1000,
        },
        sources: [
          {
            breakpoint: "md",
            sizes: ["xl", "lg", "md"],
            src: "/_static/images/who-is-he-16-9.png",
          },
        ],
      },
      layout: "base.11ty.js",
      title: "Home",
    };
  }

  // Render page contents
  async render({ landingPicture, tailwind }) {
    // Return the template
    return html`
      <main>
        <section class="bg-orange min-h-screen flex items-center justify-center">
          ${await this.picture(tailwind.breakpoints, landingPicture)}
        </section>
      </main>
    `;
  }
};
