module.exports = {
    title: "小小博的个人博客",
    keywords: '前端开发',
    description: "前端进阶之路",
    repo: 'https://github.com/accompanyXB/MyBlog.git', //仓库地址
    head: [
        ["link", { rel: "icon", href: "/img/avatar.png" }],
        ["link", { rel: "stylesheet", href: "/css/style.css" }],
    ],
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        logo: '/img/avatar.png',
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        collapsable: true,
        sidebarDepth: 3,
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