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
        lastUpdated: '上次更新',
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
                text: '配置',
                items: [
                    { text: '数据库配置', link: '/config/db' },
                    {
                        text: '主程序配置', items: [
                            { text: '基础配置', link: '/config/main/basic' },
                            { text: 'Hexo配置', link: '/config/main/hexo' },
                            { text: '图床配置', link: '/config/main/img' }
                        ]
                    }
                ]

            },
            { text: '公共面板', link: 'https://dash.wexa.top' },
        ],
    }
}