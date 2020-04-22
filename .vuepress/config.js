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
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: "文档指南",
                        link: "/guide/"
                    },
                    {
                        text: "赋能",
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
                                text: "数据存储中心",
                                link: ""                           		
                            },
                            {
                                text: "监控中心",
                                link: ""                           		
                            }
                        ]
                    }
                ],
                sidebar: {
                    "/guide/": genGuideSidebar()
                }
            }
        }
    }
};

function genGuideSidebar() {
    return [
        {
            title: "平台概述",
            collapsable: false,
            children: [""]
        },{
		title: "统一平台",
            collapsable: false,
            children: ["apollo"]
        }
    ]
}
