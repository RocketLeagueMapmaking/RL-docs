import { readdirSync } from 'fs'
import { resolve } from 'path'

interface RewriteOptions {
    base: string
    folders: string[]
    nestedFolders: { name: string, prefix: string }[]
    regexp: RegExp
}

function combineFolders (options: Pick<RewriteOptions, 'folders' | 'nestedFolders'>): string[] {
    return options.nestedFolders.flatMap(({ name, prefix }) => {
        return readdirSync(resolve('.', name))
            .filter(n => !n.includes('.'))
            .map(n => prefix + n)
    }).concat(options.folders)
}

function iterateFolder (folder: string, options: Pick<RewriteOptions, 'base' | 'regexp'>) {
    return readdirSync(resolve('.', options.base + folder), { encoding: 'utf8' })
        .filter(n => n.match(options.regexp))
        .reduce((obj, name) => {
            const route = (file: string) => folder + '/' + file
            return {
                ...obj,
                [route(name)]: route(name.replace(options.regexp, ''))
            }
        }, {} as Record<string, string>)
}

function createRewrites (options: RewriteOptions) {
    return combineFolders(options).reduce((rewrites, folderName) => {
        return {
            ...rewrites,
            ...iterateFolder(folderName, options),
        }
    }, {} as Record<string, string>)
}

export default createRewrites({
    base: 'docs/',
    regexp: /^(\d{2}_)/,
    nestedFolders: [
        { name: 'docs/guide/', prefix: 'guide/' },
    ],
    folders: [
        'cheatsheet',
        'essential',
    ],
})
