import { type ContentData, type SiteConfig } from 'vitepress'

export type FilterKey =
    | string
    | { key: string, options: (string | boolean | number)[] }

interface FilterOptions {
    prefixMatch?: boolean
    options?: (string | boolean | number)[]
    ignore?: (string | RegExp)[]
    include?: (string | RegExp)[]
}

type FilterConfig<Key extends string, Type extends string | FilterKey[]> =
    // | FilterKey
    // eslint-disable-next-line no-unused-vars
    | ({ [K in Key]: Type } & FilterOptions)

/**
 * Get frontmatter keys for a page from a configuration
 * @param path The page path
 * @param config The frontmatter key configuration
 * @param key The object key in the configuration that holds the keys values.
 */
function getKeyFromFilter <
    Key extends string,
    Type extends string | FilterKey[]
> (path: string, config: FilterConfig<Key, Type>, key: Key): FilterKey[] | undefined {
    const hasPath = (items?: (string | RegExp)[]) => items != undefined && items.some(pattern => {
        return typeof pattern === 'string' ? (config.prefixMatch ? path.startsWith(pattern) : path === pattern) : pattern.test(path)
    })

    if (hasPath(config.ignore)) return undefined
    if (config.include != undefined) {
        if (!hasPath(config.include)) return undefined
    }

    return Array.isArray(config[key]) ? config[key] : [config[key]]
}

function getInvalidFrontmatter <
    Key extends string,
    Type extends string | string[]
> (page: ContentData, configs: FilterConfig<Key, Type>[], key: Key) {
    return configs.reduce<{ key: string, value?: unknown, options?:(string | number | boolean)[] }[]>((items, config) => {
        const pageKey = getKeyFromFilter(page.url, config, key)
        if (pageKey == undefined) return items

        for (const key of pageKey) {
            const keystr = typeof key === 'string' ? key : key.key

            if (page.frontmatter[keystr] == undefined) {
                items.push({ key: keystr })
            } else if (typeof key !== 'string' && key.options.length) {
                if (!key.options.includes(page.frontmatter[keystr])) {
                    items.push({
                        key: keystr,
                        options: key.options,
                        value: page.frontmatter[keystr],
                    })
                }
            }
        }

        return items
    }, [])
}

function getUnusedFrontmatter <
    Key extends string,
    Type extends FilterKey[]
> (page: ContentData, configs: FilterConfig<Key, Type>[], key: Key) {
    const usedKeys = configs.reduce<{ key: string, value?: unknown, options?:(string | number | boolean)[] }[]>((items, config) => {
        const pageKey = getKeyFromFilter(page.url, config, key)
        if (pageKey == undefined) return items

        for (const key of pageKey) {
            const keystr = typeof key === 'string' ? key : key.key

            items.push({
                key: keystr,
                value: page.frontmatter[keystr],
                options: typeof key === 'string' ? undefined : key.options,
            })
        }

        return items
    }, [])

    return Object.keys(page.frontmatter)
        .filter(key => !usedKeys.some(k => k.key === key && (k.options ? k.options.includes(<string>k.value) : true)))
}

export interface FrontmatterValidationConfig {
    /**
     * Whether to validate the pages for frontmatter keys
     * @default true
     */
    validate?: boolean

    /**
     * Whether to throw an error on missing {@link required} keys
     * @default true
     */
    error?: boolean

    /**
     * The required keys to have on pages.
     */
    required?: FilterConfig<'key', string>[]

    /**
     * The supported keys. Can be used to check for unused keys / keys with no effect.
     */
    using?: FilterConfig<'keys', FilterKey[]>[]
}

export function validateFrontmatter (pages: ContentData[], config: FrontmatterValidationConfig, logger: SiteConfig['logger']) {
    if (config.validate === false) return
    const invalid: string[] = []

    for (const page of pages) {
        for (const { key, options, value } of getInvalidFrontmatter(page, config.required ?? [], 'key')) {
            if (options) logger.error(`Invalid frontmatter key ${key} on: ${page.url}. Received: ${value}, must be one of: ${options.join(', ')}`, { timestamp: true })
            else logger.error(`Missing frontmatter key '${key}' on: ${page.url}`, { timestamp: true })

            invalid.push(page.url)
        }

        const unknownKeys = getUnusedFrontmatter(page, config.using ?? [], 'keys')
        if (unknownKeys.length > 0) {
            const keys = unknownKeys.map(key => `${key} (${page.frontmatter[key]})`).join(', ')
            logger.warn(`Using unknown frontmatter ${keys} on: ${page.url}`, { timestamp: true })
        }
    }

    if (invalid.length > 0) {
        const msg = `Missing ${invalid.length} frontmatter keys on ${[...new Set(invalid)].length} pages`

        if (config.error ?? true) throw new Error(msg)
        else logger.error(msg, { timestamp: true })
    }
}
