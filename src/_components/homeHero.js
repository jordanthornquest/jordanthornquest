// Import lit-html-server to render templates
const { html, renderToBuffer } = require("@popeindustries/lit-html-server");

// Export component
module.exports = async function () {
  // Define template
  const hero = html`
    <section class="bg-orange flex flex-row justify-center">
      <div
        class="flex flex-col items-center lg:flex-row max-w-screen-xl min-h-screen justify-center lg-5 pt-8 pb-16 lg:pb-0 px-5 lg:pl-0 lg:pr-8 text-gray-950"
      >
        <picture
          class="flex lg:h-[500px] max-w-sm lg:max-w-none w-full lg:w-2/3"
        >
          <source
            srcset="
              https://res.cloudinary.com/deedobzcr/image/upload/c_scale,w_1600/v1621234913/him-transparent.webp
            "
            media="(min-width: 1024px)"
          />
          <img
            class="rounded-full lg:h-auto lg:min-w-full lg:rounded-none lg:object-cover lg:object-top"
            src="https://res.cloudinary.com/deedobzcr/image/upload/v1621231501/him-transparent-crop.webp"
            alt="Me, standing against an orange background, leaning forward."
          />
        </picture>
        <header class="max-w-sm mt-6 text-center">
          <h1 class="font-bold lg:text-6xl text-5xl">Workin' on it.</h1>
          <p class="leading-normal mt-5 text-xl">
            We're currently under construction, be back soon. In the meantime,
            check out my
            <a
              class="text-gray-950 hover:text-gray-900"
              href="https://music.jordanthornquest.com"
              >Bandcamp.</a
            >
          </p>
        </header>
      </div>
    </section>
  `;

  // Render to buffer
  const renderedHero = await renderToBuffer(hero);

  // Return rendered buffer
  return renderedHero;
};
