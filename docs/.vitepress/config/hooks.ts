import type { SiteConfig } from 'vitepress'
import type { ThemeConfig } from '@rocketleaguemapmaking/theme-rlmm'

/**
 * Only runs in the test workflow on the docs repo and on the master branch
 */
function isGitHubAction () {
    return process.env.GITHUB_ACTIONS != undefined
        && typeof process.env.BUILD_NOTIFICATION_URL === 'string'
        && process.env.GITHUB_REF === 'refs/heads/master'
        && process.env.GITHUB_REPOSITORY?.toLowerCase() === 'rocketleaguemapmaking/rl-docs'
}

async function sendBuildNotification (siteConfig: SiteConfig<ThemeConfig>): Promise<void> {
    await fetch(process.env.BUILD_NOTIFICATION_URL!, {
        method: 'POST',
        body: JSON.stringify({
            sha: process.env.GITHUB_SHA!,
            date: Date.now(),
            sidebar: siteConfig.site.themeConfig.sidebar,
            pages: siteConfig.pages,
        })
    })
}

export async function buildEnd (siteConfig: SiteConfig<ThemeConfig>): Promise<void> {
    if (isGitHubAction()) await sendBuildNotification(siteConfig)
}
