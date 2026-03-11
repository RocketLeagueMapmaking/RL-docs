import { type Theme } from 'vitepress'
import ThemeRLMM, { DocFeatures } from '@rocketleaguemapmaking/theme-rlmm'

import SettingsNav from './components/SettingsNav.vue'

import './style.css'

export default {
    ...ThemeRLMM,
    enhanceApp (ctx) {
        ThemeRLMM.enhanceApp(ctx)

        const components = [
            ['DocFeatures', DocFeatures],
            ['SettingsNav', SettingsNav],
        ] as const

        for (const [name, component] of components) {
            ctx.app.component(name, component)
        }

        const theme = ctx.app.config.globalProperties.$theme
        console.log(`Theme: ${theme.name} - v${theme.version}`)
    },
} satisfies Theme
