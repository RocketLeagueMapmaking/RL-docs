const { resolve } = require('path')
const { dev } = require('vuepress')

const { 
    plugins: DefaultPlugins, 
    theme, 
    additionalPages 
} = require('../../docs/.vuepress/config.js')

async function run () {
    const plugins = (DefaultPlugins || []).concat([
        [
            require('../../docs/.vuepress/plugins/linkCheck.js'),
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
        ]
    ])

    await dev({
        sourceDir: resolve('.', './docs'),
        theme,
        plugins
    })
}

run()