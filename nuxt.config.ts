// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt Age Calculator",
      meta: [{ name: "description", content: "Calculator" }],
    },
  },
});
