// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import {fileURLToPath, URL} from "node:url";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  // devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./', import.meta.url)),
        '@views': fileURLToPath(new URL('./views', import.meta.url)),
        '@components': fileURLToPath(new URL('./components', import.meta.url)),
        '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
        '@plugins': fileURLToPath(new URL('./plugins', import.meta.url)),
      }
    },
  },

  css: ["~/assets/app.css"],
  modules: ["@pinia/nuxt", "nuxt-purgecss", '@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  tailwindcss: {
    config: {
      content: [
        './*.{html,js}',
        "./**/*.js",
        "./**/*.ts",
        "./**/*.vue",
      ],
      theme: {
        extend: {
          screens: {
            'hover-hover': { 'raw': '(hover: hover)' },
          }
        },
      },
      // eslint-disable-next-line no-undef
      plugins: [require("daisyui")],
      daisyui: {
        themes: ["light"],
      },
    }
  }
})