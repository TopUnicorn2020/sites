(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{282:function(t,a,s){"use strict";s.r(a);var n=s(16),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"通用枚举"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用枚举","aria-hidden":"true"}},[t._v("#")]),t._v(" 通用枚举")]),t._v(" "),s("p",[t._v("解决了繁琐的配置，让 mybatis 优雅的使用枚举属性！")]),t._v(" "),s("blockquote",[s("p",[t._v("自"),s("code",[t._v("3.1.0")]),t._v("开始，如果你无需使用原生枚举，可配置默认枚举来省略扫描通用枚举配置 "),s("router-link",{attrs:{to:"/config/#defaultEnumTypeHandler"}},[t._v("默认枚举配置")])],1),t._v(" "),s("ul",[s("li",[s("p",[t._v("升级说明:")]),t._v(" "),s("p",[s("code",[t._v("3.1.0")]),t._v(" 以下版本改变了原生默认行为,升级时请将默认枚举设置为"),s("code",[t._v("EnumOrdinalTypeHandler")])])]),t._v(" "),s("li",[s("p",[t._v("影响用户:")]),t._v(" "),s("p",[t._v("实体中使用原生枚举")])]),t._v(" "),s("li",[s("p",[t._v("其他说明:")]),t._v(" "),s("p",[t._v("配置枚举包扫描的时候能提前注册使用注解枚举的缓存")])])])]),t._v(" "),s("h1",{attrs:{id:"_1、声明通用枚举属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、声明通用枚举属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、声明通用枚举属性")]),t._v(" "),s("blockquote",[s("p",[t._v("方式一： 使用 @EnumValue 注解枚举属性 "),s("a",{attrs:{href:"https://gitee.com/baomidou/mybatis-plus-samples/blob/master/mybatis-plus-sample-enum/src/main/java/com/baomidou/mybatisplus/samples/enums/enums/GradeEnum.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整示例"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" GradeEnum "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{attrs:{class:"token function"}},[t._v("PRIMARY")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"小学"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{attrs:{class:"token function"}},[t._v("SECONDORY")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"中学"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{attrs:{class:"token function"}},[t._v("HIGH")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"高中"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token function"}},[t._v("GradeEnum")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" code"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String descp"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" code"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descp "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" descp"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@EnumValue")]),s("span",{attrs:{class:"token comment"}},[t._v("//标记数据库存的值是code")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" code"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//。。。")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("方式二： 枚举属性，实现 IEnum 接口如下：")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" AgeEnum "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("IEnum")]),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Integer"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("ONE")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"一岁"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("TWO")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"二岁"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("THREE")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"三岁"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String desc"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Integer "),s("span",{attrs:{class:"token function"}},[t._v("getValue")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("实体属性使用枚举类型")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n     * 名字\n     * 数据库字段: name varchar(20)\n     */")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String name"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n     * 年龄，IEnum接口的枚举处理\n     * 数据库字段：age INT(3)\n     */")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" AgeEnum age"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        \n    "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n     * 年级，原生枚举（带{@link com.baomidou.mybatisplus.annotation.EnumValue}):\n     * 数据库字段：grade INT(2)\n     */")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" GradeEnum grade"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h1",{attrs:{id:"_2、配置扫描通用枚举"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置扫描通用枚举","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、配置扫描通用枚举")]),t._v(" "),s("ul",[s("li",[t._v("注意!! spring mvc 配置参考，安装集成 MybatisSqlSessionFactoryBean 枚举包扫描，spring boot 例子配置如下：")])]),t._v(" "),s("p",[t._v("示例工程：")]),t._v(" "),s("p",[t._v("👉 "),s("a",{attrs:{href:"https://git.oschina.net/baomidou/mybatisplus-spring-boot",target:"_blank",rel:"noopener noreferrer"}},[t._v("mybatisplus-spring-boot"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("配置文件 resources/application.yml")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mybatis-plus:\n    # 支持统配符 * 或者 ; 分割\n    typeEnumsPackage: com.baomidou.springboot.entity.enums\n  ....\n")])])]),s("h1",{attrs:{id:"如何序列化枚举值为数据库存储值？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何序列化枚举值为数据库存储值？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何序列化枚举值为数据库存储值？")]),t._v(" "),s("h2",{attrs:{id:"jackson"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jackson","aria-hidden":"true"}},[t._v("#")]),t._v(" Jackson")]),t._v(" "),s("h3",{attrs:{id:"一、重写tostring方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、重写tostring方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、重写toString方法")]),t._v(" "),s("h4",{attrs:{id:"springboot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot","aria-hidden":"true"}},[t._v("#")]),t._v(" springboot")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Jackson2ObjectMapperBuilderCustomizer "),s("span",{attrs:{class:"token function"}},[t._v("customizer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" builder "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" builder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("featuresToEnable")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SerializationFeature"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WRITE_ENUMS_USING_TO_STRING"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"jackson-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jackson-2","aria-hidden":"true"}},[t._v("#")]),t._v(" jackson")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    ObjectMapper objectMapper "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ObjectMapper")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    objectMapper"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("configure")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SerializationFeature"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WRITE_ENUMS_USING_TO_STRING"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("以上两种方式任选其一,然后在枚举中复写toString方法即可.")]),t._v(" "),s("h3",{attrs:{id:"二、注解处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、注解处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、注解处理")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" GradeEnum "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{attrs:{class:"token function"}},[t._v("PRIMARY")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"小学"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{attrs:{class:"token function"}},[t._v("SECONDORY")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"中学"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{attrs:{class:"token function"}},[t._v("HIGH")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"高中"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token function"}},[t._v("GradeEnum")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" code"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String descp"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" code"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descp "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" descp"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@EnumValue")]),t._v("\n  \t"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@JsonValue")]),t._v("\t"),s("span",{attrs:{class:"token comment"}},[t._v("//标记响应json值")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" code"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"fastjson"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fastjson","aria-hidden":"true"}},[t._v("#")]),t._v(" Fastjson")]),t._v(" "),s("h3",{attrs:{id:"一、重写tostring方法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、重写tostring方法-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、重写toString方法")]),t._v(" "),s("h4",{attrs:{id:"全局处理方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局处理方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局处理方式")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\t\tFastJsonConfig config "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("FastJsonConfig")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tconfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setSerializerFeatures")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SerializerFeature"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteEnumUsingToString"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"局部处理方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局部处理方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 局部处理方式")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\t\t"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@JSONField")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serialzeFeatures"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SerializerFeature"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteEnumUsingToString"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" UserStatus status"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("以上两种方式任选其一,然后在枚举中复写toString方法即可.")])])},[],!1,null,null,null);e.options.__file="enum.md";a.default=e.exports}}]);