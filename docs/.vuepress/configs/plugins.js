const process = require('process')
const additionalPages = require('./pages.js')

/**
 * Filter empty plugins
 * @param {*[]} plugins 
 */
const definePlugins = (plugins) => {
    return plugins.filter(plugin => plugin != undefined && (plugin.length || 1) > 0)
}

module.exports = definePlugins([
    '@vuepress/active-header-links',
    '@vuepress/last-updated',
    'seo',
    process.env.npm_config_test === 'links' ? [
        // Only runs when the test script in package.json is run
        require('../plugins/linkCheck.js'),
        {
            // Any additional pages
            additionalPages,
            // Log valid links
            logMatches: false,
            // Set to false to always exit with a 0 code
            exitOnErrors: true,
            // Link check configuration
            links: {
                internal: true,
                internalSlugs: true,
                external: false
            }
        }
    ] : []
])
