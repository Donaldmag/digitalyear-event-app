// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  ssr: true,
  modules:[
    // '@vee-validate/nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vue: {
    propsDestructure: true
  },
  // SEO Config for the entire app
  app: {
    head: {
      title: "Digital Yeay",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },
})
