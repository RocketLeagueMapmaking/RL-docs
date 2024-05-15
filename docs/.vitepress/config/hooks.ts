import { SiteConfig } from 'vitepress'

export async function buildEnd (siteConfig: SiteConfig): Promise<void> {
    const isAction = process.env.GITHUB_ACTIONS != undefined
        && typeof process.env.BUILD_NOTIFICATION_URL === 'string'
        && process.env.GITHUB_REF === 'refs/heads/master'
        && process.env.GITHUB_REPOSITORY?.toLowerCase() === 'rocketleaguemapmaking/rl-docs'

    if (!isAction) return

    await fetch(process.env.BUILD_NOTIFICATION_URL!, {
        method: 'POST',
        body: JSON.stringify({
            sha: process.env.GITHUB_SHA!,
            date: Date.now(),
            sidebar: siteConfig.userConfig.themeConfig?.sidebar,
            pages: siteConfig.pages,
        })
    })
}
