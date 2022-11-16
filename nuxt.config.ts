import { resolve } from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  alias: {
    '@': resolve(__dirname, './src'),
    icons: resolve(__dirname, './src/assets/icons'),
    atoms: resolve(__dirname, './src/components/atoms'),
    molecules: resolve(__dirname, './src/components/molecules'),
    organisms: resolve(__dirname, './src/components/organisms'),
    templates: resolve(__dirname, './src/components/templates'),
    composables: resolve(__dirname, './src/composables'),
    plugins: resolve(__dirname, './src/plugins'),
    stores: resolve(__dirname, './src/stores'),
    assets: resolve(__dirname, './src/assets'),
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '~/assets/scss/main.scss';",
        },
      },
    },
  },
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      title: '',
      meta: [],
      link: [],
      style: [],
      script: [],
      noscript: [],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=5',
    },
  },
})
