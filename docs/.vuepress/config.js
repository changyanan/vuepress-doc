module.exports = {
    // 网站 Title
    title: '智慧云端',
    head: [
        ['link', { rel: 'icon', href: '/imgs/logo.png' }]
    ],
    // 网站描述
    description: '参考文档',
    // 端口号
    port: 8081,
    base: '/',
    themeConfig: {
        nav: [
            {text: '主页', link: '/', icon: 'reco-home'},
            {text: '接入指南', link: '/views/zfb/'},
            {text: '加入VIP', link: '/views/bd/'},
            {text: '良心捐助', link: '/views/wx/'},
            {text: '聊天室', link: 'https://gitter.im/xuenan020/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link'}
        ],
        sidebar:{
            '/views/zfb/':[{
                title: '支付宝支付',
                collapsable: false,
                children: [
                    { title: '支付宝', path:'/views/zfb/'},
                    { title: '支付宝支付教程', path:'/views/zfb/zfb'}
                ]
            }],
            '/views/bd/':[{
                title: '百度钱包支付',
                collapsable: false,
                children: [
                    { title: '百度钱包', path:'/views/bd/'},
                    { title: '百度钱包支付教程', path:'/views/bd/bd'}
                ]
            }],
            '/views/wx/':[{
                title: '微信支付',
                collapsable: false,
                children: [
                    { title: '微信', path:'/views/wx/'},
                    { title: '微信支付教程', path:'/views/wx/wx'}
                ]
            }]
        }
    },
    plugins: ['@vuepress/back-to-top']
}


// npm run  docs:dev
// npm i vuepress-theme-antdocs

// :href="$withBase('/imgs/logo1.png')"
// https://gitter.im/xuenan020/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link
//     [![Gitter](https://badges.gitter.im/xuenan020/community.svg)](https://gitter.im/xuenan020/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)