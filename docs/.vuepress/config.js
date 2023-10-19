const {
    additionalPages,
    head,
    themeConfig,
    plugins
} = require('./configs/index.js')

module.exports = {
    title: 'RLMM',
    // Used in the meta description
    description: 'Guides, Resources, Maps, and More',
    theme: 'default-prefers-color-scheme',
    // Website icon
    icon: '/icons/logo_rlmm_round_144.png',
    head,
    // Only target browsers currently popular, avoiding polyfills and speeding up build time.
    // Disable if we want ES5 transpilation for IE.
    evergreen: true,

    // Theme configuration
    themeConfig,
    // Register plugins
    plugins,

    // Add other additional pages
    additionalPages
}
