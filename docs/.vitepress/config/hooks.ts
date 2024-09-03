import { createContentLoader, type SiteConfig, type UserConfig } from 'vitepress'
import type { ThemeConfig } from '@rocketleaguemapmaking/theme-rlmm'

import {
    validateFrontmatter,
    type FrontmatterValidationConfig,
} from './util/frontmatter'

import {
    GITHUB_DEFAULT_BRANCH,
    GITHUB_REPOSITORY,
} from './shared'

type UserConfigHookNames = keyof UserConfig extends infer Key
    ? Key extends keyof UserConfig
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
        ? Required<UserConfig>[Key] extends ((...args: any[]) => any | Promise<any>)
            ? Key : never
        : never
    : never

export type UserConfigHooks = Pick<UserConfig, Exclude<UserConfigHookNames, 'themeConfig'>>

/**
 * Only runs in the test workflow on the docs repo and on the master branch
 */
function isGitHubAction () {
    return process.env.GITHUB_ACTIONS != undefined
        && typeof process.env.BUILD_NOTIFICATION_URL === 'string'
        && process.env.GITHUB_REF === `refs/heads/${GITHUB_DEFAULT_BRANCH}`
        && process.env.GITHUB_REPOSITORY?.toLowerCase() === GITHUB_REPOSITORY
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

async function getGuidePages () {
    return await createContentLoader('**').load()
}

export interface HookConfig {
    frontmatterValidation: FrontmatterValidationConfig
}

export default function (config: HookConfig) {
    return {
        buildEnd: async function (siteConfig: SiteConfig<ThemeConfig>): Promise<void> {
            if (isGitHubAction()) {
                siteConfig.logger.info('Sending build notification')
                await sendBuildNotification(siteConfig)
            }

            const pages = await getGuidePages()
            siteConfig.logger.info(`Building ${pages.length} markdown pages`, { timestamp: true })

            // Validate the frontmatter for all docs/**/*.md files
            validateFrontmatter(pages, config.frontmatterValidation, siteConfig.logger)

            // TODO: generate/check sidebar and navbar from the files.
        },
    } satisfies UserConfigHooks
}
