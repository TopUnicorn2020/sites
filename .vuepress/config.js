module.exports = {
    port: "3000",
    dest: "docs",
    ga: "UA-85414008-1",
    base: "/sites/",
    markdown: {
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "TopUnicorn",
            description: "为企业云而生"
        }
    },
    head: [["link", {rel: "icon", href: `/favicon.ico`}]],
    themeConfig: {
        repo: "github.com/TopUnicorn2020/sites",
        docsRepo: "github.com/TopUnicorn2020/sites",
        editLinks: true,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: "文档指南",
                        link: "/guide/"
                    },
                    {
                        text: "赋能介绍",
                        items: [
                            {
                                text: "统一门户平台",
                                link: ""
                            },
                            {
                                text: "注册中心",
                                link: ""
                            },
                            {
                                text: "配置中心",
                                link: ""
                            },
                            {
                                text: "鉴权中心",
                                link: ""
                            },
														{
                                text: "分布式消息队列中心",
                                link: ""
                            },
                            {
                                text: "分布式调度中心",
                                link: ""
                            },
                            {
                                text: "分布式计算中心",
                                link: ""                           		
                            },
                            {
                                text: "监控中心",
                                link: ""                           		
                            }
                        ],
				                sidebar: {
				                    "/guide/": genGuideSidebar(true)
				                }
                    }
                ]
            }
        }
    }
};

function genGuideSidebar(isZh) {
    return [
        {
            title: isZh ? "平台概述" : "Getting Start",
            collapsable: false,
            children: ["", "apollo", "quick-start", "install", "config", "annotation"]
        },
        {
            title: isZh ? "核心功能" : "Core",
            collapsable: false,
            children: ["generator", "crud-interface", "wrapper", "page", "sequence", "id-generator"]
        },
        {
            title: isZh ? "插件扩展" : "Plugin",
            collapsable: false,
            children: [
                "hot-loading",
                "logic-delete",
                "enum",
                "typehandler",
                "auto-fill-metainfo",
                "sql-injector",
                "block-attack-sql-parser",
                "performance-analysis-plugin",
                "p6spy",
                "optimistic-locker-plugin",
                "dynamic-datasource",
                "dts",
                "tenant",
                "dynamic-table-name-parser",
                "mybatisx-idea-plugin"
            ]
        },
        {
            title: "FAQ",
            collapsable: false,
            children: [
                "faq",
                "donate"
            ]
        }
    ]
}