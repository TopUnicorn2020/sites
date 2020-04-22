# 简介

**TopUnicorn（基础平台）**是基于微服务架构技术体系设计，致力于为企业产品线提供基础架构技术支撑；为企业产品线提供业务服务支撑；为企业中台而生。



::: tip 愿景

在TopUnicorn平台的支撑下，企业产品能摆脱复杂的技术架构、复杂的业务设计流程。企业产品能更加专注于实现产品本身的核心理念，提高产品竞争力与产品用户的满意度。

:::

## 特性

- **微服务体系架构**：基于spring cloud Alibaba微服务体系架构设计

  


## 整体架构

![framework](/sites/img/unicorn-framework.png)

## Topevery-framework与TopUnicorn对应关系

原微服务基础框架从2.1.0开始接入TopUnicorn平台，在后续的升级迭代中，TopUnicorn平台会逐步整合基础技术功能与业务功能，从而实现一个平台支撑所有产品与项目的目的。

|  Topevery-framework版本  | 描述                                                         | TopUnicorn版本   | 描述                                                         |
| :----------------------: | ------------------------------------------------------------ | ---------------- | :----------------------------------------------------------- |
| Topevery-framework-1.0.0 | 基于spring cloud微服务开发的基础版本                         | /                | /                                                            |
| Topevery-framework-1.1.1 | 增加基于Oauth2.0标准的鉴权                                   | /                | /                                                            |
| Topevery-framework-2.0.0 | 原配置中心由spring cloud config替换为Apollo，增加Topevery-job调度中心 | /                | /                                                            |
| Topevery-framework-2.0.1 | 增加多数据源分库分表支持                                     | /                | /                                                            |
| Topevery-framework-2.1.0 | 接入TopUnicorn的基础版本，剥离原有注册中心Eureka，使用TopUnicorn提供的统一注册中心Nacos | TopUnicorn-1.0.0 | 基于spring cloud Alibaba微服务开发的基础版本，包括统一平台、统一用户中心统一注册中心 |
| Topevery-framework-2.1.1 | 剥离原有Oauth鉴权工程，使用TopUnicorn提供的统一鉴权中心      | TopUnicorn-1.0.1 | 增加统一鉴权中心                                             |
|           ....           | 后续迭代...                                                  | ....             | 后续迭代...                                                  |

