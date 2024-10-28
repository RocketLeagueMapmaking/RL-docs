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
    },
} satisfies Theme
