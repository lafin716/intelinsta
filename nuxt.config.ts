// https://nuxt.com/docs/api/configuration/nuxt-config

const lifecycle = process.env.npm_lifecycle_event;
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "인텔리인스타",
      meta: [{ charset: "utf-8" }],
    },
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "nuxt-icon"],
  css: ["~/assets/scss/index.scss", "~/assets/css/style.css"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  build: {
    transpile:
      lifecycle === "build" ? ["@nuxt/typescript-build", "element-plus"] : [],
  },
});
