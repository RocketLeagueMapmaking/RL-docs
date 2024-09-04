import { type ContentData, type SiteConfig } from 'vitepress'

type FilterConfig<Key extends string, Type extends string | string[]> =
    | string
    // eslint-disable-next-line no-unused-vars
    | ({ [K in Key]: Type } & { ignore?: string[], valid?: string[] })

function getKeyFromFilter <Key extends string, Type extends string | string[]> (path: string, config: FilterConfig<Key, Type>, key: Key) {
    if (typeof config === 'string') return config

    return config.ignore?.some(ignored => path.startsWith(ignored))
        ? undefined
        : (config.valid == undefined || config.valid.some(valid => path.startsWith(valid)))
            ? config[key]
            : undefined
}

export interface FrontmatterValidationConfig {
    validate?: boolean
    error?: boolean
    required?: FilterConfig<'key', string>[]
    using?: FilterConfig<'keys', string[]>[]
}

export function validateFrontmatter (pages: ContentData[], keys: FrontmatterValidationConfig, logger: SiteConfig['logger']) {
    if (keys.validate === false) return
    let invalid = 0

    for (const page of pages) {
        const frontmatter = Object.keys(page.frontmatter)

        for (const key of keys.required ?? []) {
            const pageKey = getKeyFromFilter(page.url, key, 'key')

            if (pageKey && !frontmatter.includes(pageKey)) {
                logger.error(`Missing frontmatter key ${pageKey} on: ${page.url}`, { timestamp: true })
                invalid += 1
            }
        }

        const unknwownKeys = frontmatter.filter(key => {
            return !(keys.using ?? [])
                .map(using => getKeyFromFilter(page.url, using, 'keys'))
                .filter((n): n is string[] => n != undefined)
                .some(using => using.includes(key))
        })

        if (unknwownKeys.length) {
            logger.error(`Using unknown frontmatter ${unknwownKeys.join(', ')} on: ${page.url}`, { timestamp: true })
        }
    }

    if (invalid) {
        const msg = `Missing frontmatter keys on ${invalid} pages`

        if (keys.error ?? true) throw new Error(msg)
        else logger.error(msg, { timestamp: true })
    }
}
