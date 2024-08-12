import decap from 'vite-plugin-decap-cms'

import {
    CLOUDFLARE_WORKER,
    GITHUB_DEFAULT_BRANCH,
    GITHUB_REPOSITORY,
    WEBSITE_LOGO_PATH,
    WEBSITE_URL,
} from '../shared'

import createCollections from './collections'
import { mediaFolder, publicFolder } from './options'

export { getCollectionItemEditLink } from './collections'

export default decap({
    login: {
        title: 'Content Manager | RLMM',
    },
    config: {
        backend: {
            local: 'dev',
            name: 'github',

            repo: GITHUB_REPOSITORY,
            branch: GITHUB_DEFAULT_BRANCH,
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
