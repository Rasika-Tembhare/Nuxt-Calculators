// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt Calculator",
      meta: [{ name: "description", content: "Calculator" }],
    },
  },
});
