(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{292:function(t,e,a){"use strict";a.r(e);var n=a(16),i=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注解","aria-hidden":"true"}},[t._v("#")]),t._v(" 注解")]),t._v(" "),a("blockquote",[a("p",[t._v("介绍 "),a("code",[t._v("MybatisPlus")]),t._v(" 注解包相关类详解(更多详细描述可点击查看源码注释)")])]),t._v(" "),a("p",[t._v("注解类包：")]),t._v(" "),a("p",[t._v("👉 "),a("a",{attrs:{href:"https://gitee.com/baomidou/mybatis-plus/tree/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation",target:"_blank",rel:"noopener noreferrer"}},[t._v("mybatis-plus-annotation"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"tablename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablename","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/TableName.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@TableName"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("描述：表名注解")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须指定")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",[t._v("表名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("schema")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",[t._v("schema")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("keepGlobalPrefix")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",[t._v("是否保持使用全局的 tablePrefix 的值(如果设置了全局 tablePrefix 且自行设置了 value 的值)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("resultMap")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",[t._v("xml 中 resultMap 的 id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("autoResultMap")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",[t._v("是否自动构建 resultMap 并使用(如果设置 resultMap 则不会进行 resultMap 的自动构建并注入)")])])])]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("关于`autoResultMap`的说明:")]),t._v(" "),a("p",[t._v("mp会自动构建一个"),a("code",[t._v("ResultMap")]),t._v("并注入到mybatis里(一般用不上).下面讲两句:\n因为mp底层是mybatis,所以一些mybatis的常识你要知道,mp只是帮你注入了常用crud到mybatis里\n注入之前可以说是动态的(根据你entity的字段以及注解变化而变化),但是注入之后是静态的(等于你写在xml的东西)\n而对于直接指定"),a("code",[t._v("typeHandler")]),t._v(",mybatis只支持你写在2个地方:")]),t._v(" "),a("ol",[a("li",[t._v("定义在resultMap里,只作用于select查询的返回结果封装")]),t._v(" "),a("li",[t._v("定义在"),a("code",[t._v("insert")]),t._v("和"),a("code",[t._v("update")]),t._v("sql的"),a("code",[t._v("#{property}")]),t._v("里的"),a("code",[t._v("property")]),t._v("后面(例:"),a("code",[t._v("#{property,typehandler=xxx.xxx.xxx}")]),t._v("),只作用于"),a("code",[t._v("设置值")]),t._v("\n而除了这两种直接指定"),a("code",[t._v("typeHandler")]),t._v(",mybatis有一个全局的扫描你自己的"),a("code",[t._v("typeHandler")]),t._v("包的配置,这是根据你的"),a("code",[t._v("property")]),t._v("的类型去找"),a("code",[t._v("typeHandler")]),t._v("并使用.")])])]),t._v(" "),a("h2",{attrs:{id:"tableid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tableid","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/TableId.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@TableId"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("描述：主键注解")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须指定")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("主键字段名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IdType.NONE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("主键类型")])])])]),t._v(" "),a("h4",{attrs:{id:"idtype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idtype","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/IdType.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("IdType"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("AUTO")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数据库ID自增")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NONE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无状态,该类型为未设置主键类型(注解里等于跟随全局,全局里约等于 INPUT)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INPUT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("insert前自行set主键值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ASSIGN_ID")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("分配ID(主键类型为Number(Long和Integer)或String)(since 3.3.0),使用接口"),a("code",[t._v("IdentifierGenerator")]),t._v("的方法"),a("code",[t._v("nextId")]),t._v("(默认实现类为"),a("code",[t._v("DefaultIdentifierGenerator")]),t._v("雪花算法)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ASSIGN_UUID")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("分配UUID,主键类型为String(since 3.3.0),使用接口"),a("code",[t._v("IdentifierGenerator")]),t._v("的方法"),a("code",[t._v("nextUUID")]),t._v("(默认default方法)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("s",[t._v("ID_WORKER")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("分布式全局唯一ID 长整型类型(please use "),a("code",[t._v("ASSIGN_ID")]),t._v(")")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("s",[t._v("UUID")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("32位UUID字符串(please use "),a("code",[t._v("ASSIGN_UUID")]),t._v(")")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("s",[t._v("ID_WORKER_STR")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("分布式全局唯一ID 字符串类型(please use "),a("code",[t._v("ASSIGN_ID")]),t._v(")")])])])]),t._v(" "),a("h2",{attrs:{id:"tablefield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablefield","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/TableField.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@TableField"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("描述：字段注解(非主键)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须指定")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("字段名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("el")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("映射为原生 "),a("code",[t._v("#{ ... }")]),t._v(" 逻辑,相当于写在 xml 里的 "),a("code",[t._v("#{ ... }")]),t._v(" 部分")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("exist")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否为数据库表字段")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("condition")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("字段 "),a("code",[t._v("where")]),t._v(" 实体查询比较条件,有值设置则按设置的值为准,没有则为默认全局的 "),a("code",[t._v("%s=#{%s}")]),t._v(","),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/SqlCondition.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("update")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("字段 "),a("code",[t._v("update set")]),t._v(' 部分注入, 例如：update="%s+1"：表示更新时会set version=version+1(该属性优先级高于 '),a("code",[t._v("el")]),t._v(" 属性)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("insertStrategy")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("举例：NOT_NULL: "),a("code",[t._v('insert into table_a(<if test="columnProperty != null">column</if>) values (<if test="columnProperty != null">#{columnProperty}</if>)')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("updateStrategy")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("举例：IGNORED: "),a("code",[t._v("update table_a set column=#{columnProperty}")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("whereStrategy")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("举例：NOT_EMPTY: "),a("code",[t._v("where <if test=\"columnProperty != null and columnProperty!=''\">column=#{columnProperty}</if>")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("fill")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("FieldFill.DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("字段自动填充策略")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("select")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否进行 select 查询")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("keepGlobalFormat")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否保持使用全局的 format 进行处理")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("jdbcType")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("JdbcType")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("JdbcType.UNDEFINED")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("JDBC类型 (该默认值不代表会按照该值生效)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("typeHandler")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Class<? extends TypeHandler>")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("UnknownTypeHandler.class")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("类型处理器 (该默认值不代表会按照该值生效)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("numericScale")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("指定小数点后保留的位数")])])])]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("关于`jdbcType`和`typeHandler`以及`numericScale`的说明:")]),t._v(" "),a("p",[a("code",[t._v("numericScale")]),t._v("只生效于 update 的sql.\n"),a("code",[t._v("jdbcType")]),t._v("和"),a("code",[t._v("typeHandler")]),t._v("如果不配合"),a("code",[t._v("@TableName#autoResultMap = true")]),t._v("一起使用,也只生效于 update 的sql.\n对于"),a("code",[t._v("typeHandler")]),t._v("如果你的字段类型和set进去的类型为"),a("code",[t._v("equals")]),t._v("关系,则只需要让你的"),a("code",[t._v("typeHandler")]),t._v("让Mybatis加载到即可,不需要使用注解")])]),t._v(" "),a("h4",{attrs:{id:"fieldstrategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fieldstrategy","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/FieldStrategy.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("FieldStrategy"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("IGNORED")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("忽略判断")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NOT_NULL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("非NULL判断")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("NOT_EMPTY")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("非空判断(只对字符串类型字段,其他类型字段依然为非NULL判断)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("追随全局配置")])])])]),t._v(" "),a("h4",{attrs:{id:"fieldfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fieldfill","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/FieldFill.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("FieldFill"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认不处理")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INSERT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("插入时填充字段")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("UPDATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("更新时填充字段")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("INSERT_UPDATE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("插入和更新时填充字段")])])])]),t._v(" "),a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/Version.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Version"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("描述：乐观锁注解、标记 "),a("code",[t._v("@Verison")]),t._v(" 在字段上")])]),t._v(" "),a("h2",{attrs:{id:"enumvalue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enumvalue","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/EnumValue.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@EnumValue"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("描述：通枚举类注解(注解在枚举字段上)")])]),t._v(" "),a("h2",{attrs:{id:"tablelogic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablelogic","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/TableLogic.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@TableLogic"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("描述：表字段逻辑处理注解（逻辑删除）")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须指定")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("逻辑未删除值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("delval")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("逻辑删除值")])])])]),t._v(" "),a("h2",{attrs:{id:"sqlparser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlparser","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/SqlParser.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@SqlParser"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("描述：租户注解,支持method上以及mapper接口上")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须指定")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("filter")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true: 表示过滤SQL解析，即不会进入ISqlParser解析链，否则会进解析链并追加例如tenant_id等条件")])])])]),t._v(" "),a("h2",{attrs:{id:"keysequence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keysequence","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/KeySequence.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@KeySequence"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("描述：序列主键策略 "),a("code",[t._v("oracle")])]),t._v(" "),a("li",[t._v("属性：value、resultMap")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须指定")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""')]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("序列名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("clazz")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Class")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Long.class")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('id的类型, 可以指定String.class，这样返回的Sequence值是字符串"1"')])])])])])},[],!1,null,null,null);i.options.__file="annotation.md";e.default=i.exports}}]);