### 自定义表头
表头支持自定义。

<example-render-header-table></example-render-header-table>
通过设置`renderHeader`来自定义表头，写法同`自定义列模板`

::: tip
由于`vuepress`不支持`JSX`的`v-model`，所以示例代码使用的`value`、`onInput`实现的双向绑定，正常环境下可直接使用`v-model`
:::

<<< @/docs/.vuepress/components/example/render-header-table.vue