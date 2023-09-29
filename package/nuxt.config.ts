
import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
  },
  app: {
    head: {
      title:
        "AdminPro Free Nuxt 3 Dashboard",
    },
  },
  nitro: {
    serveStatic: true,
  },
  sourcemap: { server: false, client: false },
  devServerHandlers: [],
});
