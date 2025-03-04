// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Adicionando módulos
  modules: ["@nuxtjs/tailwindcss"],

  // Importando o CSS principal
  css: ["@/assets/css/main.css"],

  // Configuração do PostCSS (já vem incluída no módulo do Tailwind)
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Adicionando o plugin do FontAwesome
  plugins: ["@/plugins/fontawesome.client.js"],

  // Configurações globais da aplicação
  app: {
    head: {
      title: "Israel A Gomes Website",
    },
  },
});
