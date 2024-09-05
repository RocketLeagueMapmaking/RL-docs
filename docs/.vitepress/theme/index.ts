import { type Theme } from 'vitepress'
import ThemeRLMM, { DocFeatures } from '@rocketleaguemapmaking/theme-rlmm'

import './style.css'

export default {
    ...ThemeRLMM,
    enhanceApp (ctx) {
        ThemeRLMM.enhanceApp(ctx)

        const components = [
            ['DocFeatures', DocFeatures],
        ] as const

        for (const [name, component] of components) {
            ctx.app.component(name, component)
        }
    },
} satisfies Theme
