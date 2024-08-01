import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'

import type { UserConfig } from 'vitepress'

export type RewriteConfig = NonNullable<UserConfig['rewrites']>

type RewriteFolderOptions =
    | string
    | { name: string, nested?: boolean }

export interface RewriteOptions {
    base: string
    folders: RewriteFolderOptions[]
    regexp: RegExp
}

function combineBaseWithFolders (base: string, folders: RewriteFolderOptions[]): string[] {
    const nestedFolders = folders.filter(f => typeof f !== 'string' && f.nested)
        .flatMap(filename => {
            const name = base + filename + '/', prefix = filename + '/'
            return readdirSync(resolve('.', name))
                .filter(n => !n.includes('.'))
                .map(n => prefix + n)
        })

    const flatFolders = folders.filter(f => typeof f === 'string' || !f.nested)
        .map(f => typeof f === 'string' ? f : f.name)

    return nestedFolders.concat(flatFolders)
}

const createFileRewrite = (filename: string, folder: string, regexp: RegExp) => {
    const route = (file: string) => folder + '/' + file

    return {
        [route(filename)]: route(filename.replace(regexp, ''))
    }
}

function createRewritesForFolder (folder: string, base: string, regexp: RegExp) {
    return readdirSync(resolve('.', base + folder), { encoding: 'utf8' })
        .filter(n => n.match(regexp))
        .reduce<Record<string, string>>((rewrites, filename) => ({
            ...rewrites,
            ...createFileRewrite(filename, folder, regexp),
        }), {})
}

export default function (options: RewriteOptions): RewriteConfig {
    const folders = combineBaseWithFolders(options.base, options.folders)

    return folders.reduce<RewriteConfig>((rewrites, folder) => {
        return {
            ...rewrites,
            ...createRewritesForFolder(folder, options.base, options.regexp),
        }
    }, {})
}
