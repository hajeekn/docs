module.exports = {
    title: 'Wexagonal',
    description: 'A Lightweight \\ Multi Platform \\ Out of The Box hexo backend Manager',
    head: [
        ['link', { rel: 'icon', href: 'https://npm.elemecdn.com/wexagonal_icon' }]
    ],
    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "有文章更新了",
                buttonText: "刷新"
            }
        },
        '@vuepress/back-to-top': true
    },
    themeConfig: {
        repo: 'Wexagonal/docs',
        repoLabel: '查看源码',
        docsDir: 'docs',
        branch: 'main',
        editLinks: true,
        editLinkText: '帮助我改善此页面！',
        lastUpdated: '上次更新',
        logo: 'https://npm.elemecdn.com/wexagonal_icon',
        sidebar: 'auto',
        nav: [
            { text: '开始', link: '/start' },
            {
                text: '主页',
                link: '/',
            },
            {
                text: '数据库',
                link: '/db',
            },
            {
                text: '部署',
                items: [
                    { text: '首页', link: '/deploy/' },
                    { text: 'Vercel', link: '/deploy/vercel' }
                ]
            },
            {
                text: '故障解析',
                link: 'https://translate.wexa.top',
            },
            { text: 'Github', link: 'https://www.github.com/Wexagonal/Wexagonal' },
        ],
    }
}
