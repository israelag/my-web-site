export default defineNuxtConfig({
  // Configurações do SSR
  ssr: true,

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

  // 🔥 Garante que o preset do Netlify está ativo
  nitro: {
    preset: "netlify",
  },

  compatibilityDate: "2025-03-05",
});