const { resolve, join, sep } = require('path')
const { existsSync } = require('fs')
const process = require('process')

const markdownLinkCheck = require('markdown-link-check')
const markdownLinkExtractor = require('markdown-link-extractor')
const chalk = require('chalk')

/**
 * @typedef MarkdownLink
 * @property {string} raw
 * @property {string} href
 * @property {string} text
 * @property {string | null} title
 * @property {Array<{ type: string, raw: string, text: string }>} tokens
 */

/**
 * @typedef PageData
 * @property {string} path
 * @property {string[]} [headers]
 */

/**
 * @typedef PageSearchOptions
 * @property {PageData[]} additionalPages
 * @property {PageData[]} site
 * @property {string} source
 * @property {string} publicDir
 */

/**
 * Check whether the input is given and return otherwise given the default value.
 * Only intended for booleans for this plugin.
 * Replace on later node version with input ??= Default
 * @param {*} input 
 * @param {boolean} Default 
 * @returns {boolean}
 */
const option = (input, Default) => input != undefined ? input : Default

/**
 * Validate an external link (starting with http(s)://)
 * @param {string} link 
 */
const checkExternalLink = (link) => {
    markdownLinkCheck(link.href, {
        projectBaseUrl: '/docs/',
        replacementPatterns: [ 
            { pattern: './', replacement: '{{BASEURL}}/'}, 
            { pattern: '/', replacement: '{{BASEURL}}/'},
            { pattern: '../', replacement: '{{BASEURL}}/'}
        ],
        ignorePatterns: [{ pattern: 'http'}]
    }, (err, results) => {
        if (err) {
            console.log('Error', err)
            return
        }
        results.forEach(result => {
            if (result.status !== 'ignored') {
                console.warn('%s is %s', result.link, result.status)
            }
        })
    })
}

/**
 * Check if the relative path is a site page
 * @param {string} relativeLink 
 * @param {string} currentPath 
 * @param {PageSearchOptions} options
 * @returns 
 */
const checkPage = (relativeLink, currentPath, options) => {
    const { publicDir, source, site, additionalPages } = options

    const pageHeader = relativeLink.includes('.html#') || relativeLink.includes('.md#') 
        ? relativeLink.slice(relativeLink.indexOf('#') + 1) 
        : null

    const pagePath = !['.', '/'].includes(relativeLink[0]) 
        ? currentPath.slice(0, currentPath.lastIndexOf('/')) 
        : currentPath
                
    const resolvedPath = relativeLink.startsWith('../') ? `../${relativeLink}` : relativeLink
    const relSuffix = resolvedPath.indexOf('.html') > 0 ? resolvedPath.indexOf('.html') : resolvedPath.indexOf('.md')
    const relPath = pageHeader ? resolvedPath.slice(0, relSuffix + 1) + 'md' : resolvedPath
                
    const path = (base) => resolve(base + sep + pagePath, relPath)
    const pathNoExt = (base) => resolve(base + sep + pagePath.replace('.md', ''), relPath)
    const publicPath = publicDir + sep + relPath

    const page = site.find(page => [path(source), pathNoExt(source), publicPath].some(path => path.includes(page.path)))

    const isValidPath = existsSync(path(source)) 
        || existsSync(path(publicDir)) 
        || existsSync(publicPath) 
        || existsSync(pathNoExt(source))
        || additionalPages.some(page => path(source) === join(source, page.path))

    const isValid = (path) => existsSync(path) ? path : null 

    const output = isValid(path(source)) || isValid(path(publicDir)) || isValid(pathNoExt(source)) || additionalPages.find(page => path(source) === join(source, page.path))
    const validPath = output && output.path ? output.path : output
            
    if (!isValidPath && validPath) console.log(chalk.red(validPath))
    return {
        header: pageHeader,
        page,
        isValidPath,
        validPath
    }
}

/**
 * Check whether a header (page slug after #) is valid on a page
 * @param {string} header 
 * @param {string} otherPagePath 
 * @param {PageSearchOptions} searchOptions
 * @param {boolean} logMatches
 */
const checkHeader = (header, otherPagePath, searchOptions, logMatches, link = '') => {
    const { additionalPages, site, source } = searchOptions

    if (additionalPages.some(page => page.path === otherPagePath)) {
        console.log(chalk.yellowBright(`Skipping header check on additional page: ${header} [${otherPagePath}]`))
        return
    }

    const pathFromSource = otherPagePath.slice(source.length).replace(/\\/g, '/')
    const page = site.find(page => page.path === otherPagePath 
        || otherPagePath.includes(page.path) 
        || [pathFromSource, pathFromSource.toLowerCase()].includes(`/${page.path}`)
        || otherPagePath.replace('\\', '/').includes(page.path)
    ) || {}
            
    const headers = page.headers || []
    const isValid = headers.some(x => x === header) 

    const pageHeaders = headers.length > 0 ? `(page has headers: ${headers.join(',')})` : '(page has no headers)'
    const message = (valid) => `${valid} header on link: ${header} ${pageHeaders}${link ? `. Link: ${link}` : ''} [${otherPagePath}]`

    if (!isValid) {
        console.warn(chalk.yellow(message('Invalid')))
    } else if (logMatches) {
        console.log(chalk.green(message('Valid')))
    }
}

module.exports = (options, ctx) => {
    const name = 'rlmm-linkcheck-plugin'
    const description = 'test markdown links'

    // Set the plugin options
    const linkOptions = options.links || {}
    const checkExternal = option(linkOptions.external, false)
    const checkInternal = option(linkOptions.internal, true)
    const checkHeaders = option(linkOptions.internalSlugs, true)
    const logMatches = option(options.logMatches, false)
    const exitOnError = option(options.exitOnErrors, true)

    // Read the pages from the options
    const pages = option(options.additionalPages, [])
    const additionalPages = pages.map(page => ({ 
        path: page.path.replace('.html', '.md')
    }))
    
    return {
        name,
        ready () {
            console.log(`Running plugin ${name}: ${description}`)

            /**
             * @type {Array<string>}
             */
            const markdownPages = ctx.pages.map(page => page._strippedContent)

            const site = ctx.pages.map(page => ({ 
                headers: page.headers ? page.headers.map(h => h.slug) : [],
                path: page.relativePath
            }))

            const source = ctx.options.sourceDir, publicDir = source + sep + '.vuepress' + sep + 'public'

            const searchOptions = {
                additionalPages,
                source,
                publicDir,
                site
            }

            const invalidLinks = checkInternal || checkExternal ? markdownPages.map((content, i) => {
                /**
                 * @type {Array<string>}
                 */
                const links = markdownLinkExtractor(content, true).links

                // Check only for internal vuepress links
                const pageLinks = links.filter(n => checkExternal ? n : !n.startsWith('http'))
                if (pageLinks.length < 0) { 
                    return null
                }

                // Check external links
                if (checkExternal) pageLinks.forEach(checkExternalLink)

                // Get all invalid links on this page
                const invalidPageLinks = checkInternal ? pageLinks.map(href => {
                    const sitePage = site[i].path

                    // Link is a header on the current page
                    if (href.startsWith('#')) {
                        checkHeader(href.slice(1), sitePage, searchOptions, logMatches)
                        return null
                    }

                    const { isValidPath, page, header, validPath } = checkPage(href, sitePage, searchOptions)

                    if (isValidPath) {
                        if (header && checkHeaders) {
                            const path = (page || {}).path || validPath
                            checkHeader(header, path , searchOptions, logMatches, href)
                        }

                        if (logMatches) console.log(chalk.green(`Valid link: ${href}`))
                    } else {
                        return `Invalid link found: ${href} [${sitePage}]`
                    }
                }).filter(n => n) : []

                return invalidPageLinks
            }).filter(n => n).flat() : []

            if (invalidLinks.length > 0) invalidLinks.forEach(link => {
                console.warn(chalk.yellow(link))
            })

            const code = invalidLinks.length > 0 && exitOnError ? 1 : 0
            const renderer = invalidLinks.length > 0 ? exitOnError ? chalk.red : chalk.redBright : chalk.green
            const exitmessage = renderer(
                `Test exit code: ${code}. Invalid internal links found: ${invalidLinks.length}`
            )

            console.log(exitmessage)
            process.exit(code)
        }
    }
}
