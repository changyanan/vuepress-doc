module.exports = {
    // 网站 Title
    title: '智慧云端',
    // 网站描述
    description: '参考文档',
    // 端口号
    port: 8081,
    base: '/',
    themeConfig: {
        nav: [
            {text: '主页', link: '/', icon: 'reco-home'},
            {text: '接入指南', link: '/views/jd/'},
            {text: '加入VIP', link: '/views/bd/'},
            {text: '良心捐助', link: '/views/wx/'},
            {text: '支付付款', link: '/views/zfb/'}
        ],
        sidebar: 'auto',
        sidebar:{
            '/views/jd':[
                'jd'
            ],
            '/views/zfb':[
                'zfb'
            ],
            '/views/wx':[
                'wx'
            ],
            '/views/bd':[
                'bd'
            ]
        }
    }

}


// npm run  docs:dev
// npm i vuepress-theme-antdocs

// :href="$withBase('/imgs/logo.png')"
// https://gitter.im/xuenan020/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link
//     [![Gitter](https://badges.gitter.im/xuenan020/community.svg)](https://gitter.im/xuenan020/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)