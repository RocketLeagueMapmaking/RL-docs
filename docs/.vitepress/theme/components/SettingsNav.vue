<script setup lang="ts">
import { VPLink } from '@rocketleaguemapmaking/theme-rlmm';

defineProps<{
    link: string
    icon: string
    label: string
}>()
</script>

<template>
    <VPLink class="nav-settings" target="_self" :href="link" :noIcon="true">
        <span class="nav-settings-item">
            <p>{{ label }}</p>
            <Icon :icon="icon" class="nav-settings-icon" />
        </span>
    </VPLink>
</template>

<style lang="css">
.VPNavScreenAppearance, .VPNavBarAppearance, .VPNavBarExtra .group:has(.item.appearance) {
    display: none !important;
}

.nav-settings-item p {
    display: none;
}

.VPNavScreenMenu .nav-settings-item p {
    display: block;
}

.VPNavScreenMenu .nav-settings-item {
    display: flex;
    background-color: var(--vp-c-bg-soft);
}

.nav-settings-item {
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 4px;
}

.nav-settings-icon {
    width: 20px;
    height: 20px;
}

.nav-settings {
    color: var(--vp-c-text-2);
    font-size: 12px;
    font-weight: 500;
}

.nav-settings:hover {
    cursor: pointer;
    color: var(--vp-c-text-1);
    transition: 0.5s ease-in-out;
}
</style>