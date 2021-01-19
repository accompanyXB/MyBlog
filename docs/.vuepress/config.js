module.exports = {
    title: '小小博的个人博客', //标题
    keywords: '前端开发',
    description: '前端开发 小小博的个人博客',
    repo: 'https://github.com/accompanyXB/MyBlog.git', //仓库地址
    // base: '/MyBlog/', // 配合部署项目
    head: [
        ['link', { rel: 'icon', href: '/avatar.png' }]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: { //主题配置
        logo: '/avatar.png',
        nav: [ //导航栏
            { text: '首页', link: '/' },
            { text: 'JS', link: '/js_docs/' },
            { text: 'CSS', link: '/css_docs/' },
            { text: 'Vue', link: '/vue_docs/' },
            { text: 'React', link: '/react_docs/' },
            { text: 'github', link: 'https://github.com/accompanyXB/MyBlog.git' }
        ],
        sidebar: { //侧边拦
            '/2020/': [
                ['/2020/5/', '5月份'],
                ['/2020/6/', '6月份']
            ]
        }
    }
}