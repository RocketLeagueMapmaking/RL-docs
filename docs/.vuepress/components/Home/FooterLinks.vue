<template>
    <div class="home-footer-links">
        <img
            :alt="image.alt"
            :src="image.src"
            :style="{ 'max-width': image.maxWidth }"
        >
        <div class="links-container">
            <a
                v-for="link in links"
                :key="link.link"
                :href="link.link"
            >
                {{ link.text }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            image: {
                alt: 'RLMM logo',
                maxWidth: '50px',
                src: 'icons/logo_rlmm_round_144.png'
            },
            links: [
                {
                    text: 'YouTube',
                    link: 'https://www.youtube.com/channel/UCp6gkqadtgsaZmPnex9MNiA/featured'
                },
                {
                    text: 'Discord',
                    link: 'https://discord.gg/PWu3ZWa'
                },
                {
                    text: 'Twitter',
                    link: 'https://twitter.com/rlmapmaking'
                },
                {
                    text: 'Contact',
                    link: './more/contact'
                },
                {
                    text: 'About',
                    link: './more/about'
                }
            ]
        }
    }
}
</script>

<style scoped>
.home-footer-links {
    max-width: 50vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.links-container {
    padding: 8px;
}

.links-container a {
    margin: 0 auto;
}
</style>
