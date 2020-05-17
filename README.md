# React 生态练习项目

## 项目说明

本项目为 React 生态练习项目，目的是学习和巩固 React 生态相关知识点。项目分为多个阶段，每个阶段在前一阶段的基础上做优化并添加新的功能。

由于本项目需要跨域请求 cnode 的接口，所以在 develop 模式下配置了 proxy，在 production 模式下则不起作用。

## 项目阶段

### v1（对应项目的 v1 分支）

只有单个页面，展示 CNODE 社区首页帖子列表

功能点：

1）React 数据驱动 UI、React 组件化
2）样式：css 独立文件
3）网络请求：axios

### v2（对应项目的 v2 分支）

添加详情页等多个页面

功能点：

1）ReactRouter 前端路由
2) css 方案采用 styledComponents

### v3（对应项目的 v3 分支）

优化代码

功能点：

1）添加 typescript
2）添加 eslint