import decap from 'vite-plugin-decap-cms'

import {
    CLOUDFLARE_WORKER,
    GITHUB_CMS_BRANCH,
    GITHUB_REPOSITORY,
    WEBSITE_LOGO_PATH,
    WEBSITE_URL,
} from '../shared'

import { customContainerBlock } from './blocks'
import createCollections, { getCollectionItemEditLink } from './collections'
import { mediaFolder, publicFolder } from './options'

export {
    getCollectionItemEditLink,
}

export default decap({
    login: {
        title: 'Content Manager | RLMM',
    },
    debug: true,
    script: {
        markdownEditorComponents: [
            customContainerBlock,
        ],
    },
    config: {
        backend: {
            local: 'dev',
            name: 'github',

            repo: GITHUB_REPOSITORY,
            branch: GITHUB_CMS_BRANCH,
            cmsLabelPrefix: 'cms/',

            squashMerges: true,
            openAuthoring: true,
            alwaysFork: false,

            siteDomain: CLOUDFLARE_WORKER,
            baseUrl: CLOUDFLARE_WORKER,
            authEndpoint: '/cms/auth',
        },

        mediaFolder,
        publicFolder,
        logoUrl: WEBSITE_LOGO_PATH,
        displayUrl: WEBSITE_URL,

        editor: { preview: false },
        publishMode: 'editorial_workflow',
        collections: createCollections(),
    },
})
