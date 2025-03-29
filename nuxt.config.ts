import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxtjs/google-fonts",
  ],

  app: {
    head: {
      titleTemplate: "%s - Example",
    },
  },

  site: {
    url: "https://www.example.fr",
    name: "Example",
    trailingSlash: true,
    defaultLocale: "fr",
  },

  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Example",
      url: "https://www.example.fr",
      logo: "https://www.example.fr/images/logos/example.svg",
      sameAs: ["https://www.facebook.com/example/"],
    },
  },

  sitemap: {
    exclude: ["/_ipx/**"],
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  googleFonts: {
    families: {
      Borel: 400,
    },
    display: "swap",
  },

  devtools: { enabled: true },

  compatibilityDate: "2024-11-01",
});
