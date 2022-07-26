import { createVuetify } from "vuetify";
import type { ThemeDefinition } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const Lighttheme: ThemeDefinition = {
  dark: false,
  variables: {},
  colors: {
    primary: "#186dde",
    info: "#03c9d7",
    success: "#05b187",
    accent: "#fc4b6c",
    warning: "#fec90f",
    error: "#fc4b6c",
    secondary: "#0acc95",
  },
};
const Darktheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#186dde",
    secondary: "#0acc95",
  },
};
export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: Lighttheme,
        dark: Darktheme,
        variables: {},
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
