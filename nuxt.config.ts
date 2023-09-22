// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    site: {
        url: 'https://www.jewelexx.com',
    },
    devtools: { enabled: true },
    css: ['@/scss/global.scss'],
    modules: ['nuxt-simple-sitemap', 'nuxt-simple-robots'],
});
