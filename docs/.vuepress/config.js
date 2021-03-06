module.exports = {
    title: "小小博的个人博客",
    keywords: '前端开发',
    description: "My tech blog",
    repo: 'https://github.com/accompanyXB/MyBlog.git', //仓库地址
    base: '/MyBlog/', // 配合部署项目
    head: [
        ["link", { rel: "icon", href: "/img/avatar.png" }],
        ["link", { rel: "stylesheet", href: "/css/style.css" }],
    ],
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        collapsable: true,
        // sidebarDepth: 2,
        lastUpdated: "Last Updated",
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: "更新",
            },
        },
        editLinks: true,
        editLinkText: "在 GitHub 上编辑此页 ！",
    },

};