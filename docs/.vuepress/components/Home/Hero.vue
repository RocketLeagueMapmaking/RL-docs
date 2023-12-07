<template>
    <section class="headpage">
        <h1
            class="title"
            v-html="title"
        />
        <p>{{ description }}</p>

        <div class="headpage-actions">
            <a
                v-for="action in actions"
                :key="action.text"
                class="headpage-action"
                :class="{ primary: action.primary }"
                :href="action.link"
            >
                <span>
                    {{ action.text }}
                </span>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            className: 'hero',
            title: 'Rocket League<br>Mapmaking',
            description: 'Guides, Maps, Downloads, and More!',
            actions: [
                {
                    text: 'Get started with UDK',
                    link: '/essential/',
                    primary: true,
                },
            ]
        }
    },

    mounted () {
        const innerHTML = '<div class="headpage">' + this.$el.innerHTML + '</div>'

        document.getElementsByClassName(this.className)
            .item(0).innerHTML = innerHTML
    }
}
</script>

<style lang="stylus">
.headpage {
    height: calc(100vh - 3.6rem);
    background-color: #2d2d2d;
    background-image: linear-gradient(180deg, rgba(0, 134, 29, 0.33) 0%, var(--bgColor) 100%), url('../../public/images/home/rsz_home-stadium.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10vw;
    max-width: 100vw !important;
}

.headpage h1 {
    text-transform: uppercase;
    color: white;
    font-size: 84px;
    font-weight: bold;
    line-height: 5rem;
    margin: 0px 20px 0px 0px;
}

.headpage p {
    color: var(--textColor);
    max-width: 600px;
    padding-bottom: 12px;
    padding-right: 5vw;
    font-size: 30px;
}

.headpage-actions {
    display: flex;
}

.headpage-action {
    padding: 12px 28px;
    background-color: var(--bgColor);
    border: none;
    border-radius: 4px;
}

.headpage-action.primary {
    background-color: var(--darken10AccentColor);
}

.headpage-action span {
    color: var(--textColor);
    font-size: 18px;
}

.headpage-action:hover {
    text-decoration: none !important;
    background-color: var(--darken10BgColor);
    cursor: pointer;
}

.headpage-action.primary:hover {
    background-color: var(--accentColor);
}

@media screen and (max-width: 600px) {
    .headpage {
        padding-left: 5vw;
    }

    .headpage h1 {
        transform: translateY(35px);
        font-size: 54px;
        line-height: 4rem;
        max-width: 90vw;
    }
}
</style>
