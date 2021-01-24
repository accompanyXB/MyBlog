const { title } = require("../.vuepress/config");

module.exports = [{
        title: "HTML",
        collapsable: true,
        children: [
            { title: "总结", path: "/guide/notes/html/总结" },
        ],
    },
    {
        title: "CSS",
        collapsable: true,
        children: [
            { title: "HTML5+CSS3", path: "/guide/notes/css/HTML5+CSS3" },
            { title: "flex布局", path: "/guide/notes/css/flex布局" },
            { title: "响应式布局", path: "/guide/notes/css/响应式布局" },
            { title: "rem布局", path: "/guide/notes/css/rem布局" },
            { title: "移动端web总结", path: "/guide/notes/css/移动端web总结" },
            { title: "日常小结 ", path: "/guide/notes/css/日常小结 " },
        ],
    },

    {
        title: "Javascipt",
        collapsable: true,
        children: [
            { title: "JavaScript预解析", path: "/guide/notes/js/JavaScript预解析" },
            { title: "javascript之DOM", path: "/guide/notes/js/javascript之DOM" },
            { title: "PC端网页特效", path: "/guide/notes/js/PC端网页特效" },
            { title: "移动端特效", path: "/guide/notes/js/移动端特效" },
            { title: "Javascript之BOM", path: "/guide/notes/js/Javascript之BOM" },
            { title: "函数高级（闭包、递归、深浅拷贝）", path: "/guide/notes/js/函数高级（闭包、递归、深浅拷贝）" },
            { title: "构造函数和原型", path: "/guide/notes/js/构造函数和原型" },
        ],
    },

    {
        title: "HTML&CSS练习",
        collapsable: true,
        children: [{
                title: "01-基本标签",
                path: "/guide/notes/htmlcsswork/01-基本标签",
            },
            {
                title: "02-列表标签",
                path: "/guide/notes/htmlcsswork/02-列表标签",
            },
        ],
    },
    {
        title: "Javascipt练习",
        collapsable: true,
        children: [{
                title: "01-认识javaScript",
                path: "/guide/notes/jswork/01-认识javascript",
            },
            {
                title: "02-变量与数据类型",
                path: "/guide/notes/jswork/02-变量与数据类型",
            },
            { title: "03-DOM", path: "/guide/notes/jswork/03-DOM" },
            {
                title: "04-表达式和操作符",
                path: "/guide/notes/jswork/04-表达式和操作符",
            },
            { title: "05-判断", path: "/guide/notes/jswork/05-判断" },
            { title: "06-循环", path: "/guide/notes/jswork/06-循环" },
            { title: "07-暂无" },
            { title: "08-函数", path: "/guide/notes/jswork/08-函数" },
            { title: "09-案例", path: "/guide/notes/jswork/09-案例" },
            { title: "10-数组", path: "/guide/notes/jswork/10-数组" },
            { title: "11-字符串", path: "/guide/notes/jswork/11-字符串" },
            { title: "12-DOM", path: "/guide/notes/jswork/12-DOM" },
            { title: "13-BOM", path: "/guide/notes/jswork/13-BOM" },
            { title: "14-面向对象", path: "/guide/notes/jswork/14-面向对象" },
            {
                title: "15-Js阶段测试组卷",
                path: "/guide/notes/jswork/15-Js阶段测试组卷",
            },
            {
                title: "16-模板字符串箭头函数变量声明",
                path: "/guide/notes/jswork/16-模板字符串箭头函数变量声明",
            },
            { title: "17-解构赋值", path: "/guide/notes/jswork/17-解构赋值" },
            {
                title: "18-对象字面量增强和函数默认参数",
                path: "/guide/notes/jswork/18-对象字面量增强和函数默认参数",
            },
            {
                title: "19-剩余参数和数组展开",
                path: "/guide/notes/jswork/19-剩余参数和数组展开",
            },
            { title: "20-Map Set", path: "/guide/notes/jswork/20-Map Set" },
            {
                title: "21-iterator和for...of循环",
                path: "/guide/notes/jswork/21-iterator和for...of循环",
            },
            {
                title: "22-Promise和class",
                path: "/guide/notes/jswork/22-Promise和class",
            },
            { title: "23-module", path: "/guide/notes/jswork/23-module" },
            { title: "24-ES6测评题目", path: "/guide/notes/jswork/24-ES6测评题目" },
            {
                title: "25-本地存储和http",
                path: "/guide/notes/jswork/25-本地存储和http",
            },
            { title: "26-ajax选择题", path: "/guide/notes/jswork/26-ajax选择题" },
        ],
    },
];