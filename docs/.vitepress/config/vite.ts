import { type Plugin } from 'vitepress'
import { type UserConfig } from 'vite'

import cms from './cms/'

/**
 * Makes the 'Edit this page' feature have a target attribute.
 *
 * This is needed to link to non-VitePress pages, such as the CMS.
 */
const vitepressEditLinkPlugin: Plugin = {
    name: 'make-edit-link-external',
    enforce: 'pre',
    transform: (code, id) => {
        if (id.endsWith('VPDocFooter.vue')) {
            const link = '<VPLink class="edit-link-button"'
            return code.replace(link, link + ' target="_self"')
        }
    },
}

export default {
    publicDir: '.vitepress/public',
    plugins: [
        cms,
        vitepressEditLinkPlugin,
    ],
} satisfies UserConfig
