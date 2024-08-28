import { type Theme } from 'vitepress'
import ThemeRLMM, { DocFeatures } from '@rocketleaguemapmaking/theme-rlmm'

import './style.css'

export default {
    ...ThemeRLMM,
    enhanceApp (ctx) {
        ThemeRLMM.enhanceApp(ctx)
        ctx.app.component('DocFeatures', DocFeatures)
    },
} satisfies Theme
