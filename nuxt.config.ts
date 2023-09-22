// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    site: {
        url: 'https://www.jewelexx.com',
        name: "Juliette Cordor's Portfolio",
        description: 'Juliette Cordor, developer and other things also.',
        defaultLocale: 'en',
    },
    devtools: { enabled: true },
    css: ['@/scss/global.scss'],
    modules: ['nuxt-simple-sitemap', 'nuxt-simple-robots', '@nuxtseo/module'],
});
