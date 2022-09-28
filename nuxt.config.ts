import { resolve } from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  alias: {
    icons: resolve(__dirname, './src/assets/icons'),
    atoms: resolve(__dirname, './src/components/atoms'),
    molecules: resolve(__dirname, './src/components/molecules'),
    organisms: resolve(__dirname, './src/components/organisms'),
    templates: resolve(__dirname, './src/components/templates'),
    directives: resolve(__dirname, './src//directives'),
    services: resolve(__dirname, './src/services'),
    repositories: resolve(__dirname, './src/repositories'),
    plugins: resolve(__dirname, './src/plugins'),
  },
  css: ['~/assets/scss/main.scss'],
  buildModules: [],
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
