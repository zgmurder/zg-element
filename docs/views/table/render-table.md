### 自定义列模板
自定义列的显示内容，可组合其他组件使用。

<example-render-table></example-render-table>
暂不支持官方`<template slot-scope="scope"></template>`用法自定义，统一使用`render`和`JSX`写法。`render`参考[官网文档](https://cn.vuejs.org/v2/guide/render-function.html)。个人觉得`JSX`写法更简洁舒服些，后面的相关示例都是`JSX`写法，
`vue-cli-2`脚手架搭建的项目如需支持`JSX`，请参考配置：[点击前往](https://github.com/vuejs/babel-plugin-transform-vue-jsx)，如需支持`v-model`写法，请安装配置：[点击前往](https://github.com/nickmessing/babel-plugin-jsx-v-model)。
`vue-cli-3`脚手架自带，可直接使用`JSX`,`JSX`写法参考同上地址。

<<< @/docs/.vuepress/components/example/render-table.vue