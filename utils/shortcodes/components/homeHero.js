// Import lit-html-server to render templates
const { html } = require("@popeindustries/lit-html-server");

// Import picture component
const picture = require("./picture");

// Export component
module.exports = async function (breakpoints, landingPicture) {
  return html`
    <main class="bg-orange">
      <section
        class="auto-rows-max container gap-4 grid grid-cols-1 min-h-screen place-content-center lg:gap-10 lg:grid-cols-3"
      >
        ${await picture(breakpoints, landingPicture)}
        <header
          class="max-w-sm place-self-center text-center text-gray-900 lg:col-span-1 lg:max-w-full lg:text-left lg:align-self-center lg:justify-self-center"
        >
          <h1 class="font-bold text-5xl lg:text-6xl xl:text-7xl">
            Workin' on it.
          </h1>
          <p class="leading-normal mt-5 text-xl">
            We're currently under construction, be back soon. In the meantime,
            check out my
            <a
              class="text-gray-900 hover:text-gray-800"
              href="https://music.jordanthornquest.com"
              >Bandcamp.</a
            >
          </p>
        </header>
      </section>
    </main>
  `;
};
