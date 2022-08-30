module.exports = [
    '@vuepress/active-header-links',
    '@vuepress/last-updated',
    'seo',
    [
        'vuepress-plugin-container',
        {
            type: 'info',
            before: info => `
                <div class="custom-block tip info" style="border-color: #007497">
                    <p class="custom-block-title">${info}</p>
                `,
            // defaultTitle: 'info',
            after: '</div>',
        }
    ],
]
