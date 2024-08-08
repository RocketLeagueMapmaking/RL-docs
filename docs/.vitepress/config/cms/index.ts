import decap from 'vite-plugin-decap-cms'

import { GITHUB_REPOSITORY } from '../shared'

import createCollections from './collections'
import { mediaFolder } from './options'

export default decap({
    login: {
        title: 'Content Manager | RLMM',
    },
    config: {
        backend: {
            local: 'dev',
            name: 'github',
            repo: GITHUB_REPOSITORY,
            // Cannot be 'cms' apparently
            branch: 'content',
            cmsLabelPrefix: 'cms/',
            squashMerges: true,
            openAuthoring: true,
            alwaysFork: true,
        },

        mediaFolder,
        logoUrl: 'docs/.vitepress/public/icons/logo_rlmm_round_144.png',
        displayUrl: 'https://rocketleaguemapmaking.com',

        editor: { preview: false },
        publishMode: 'editorial_workflow',
        collections: createCollections(),
    },
})