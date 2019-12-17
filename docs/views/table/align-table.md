### 表格对齐
表格头部及内容的对齐方式。

<example-align-table></example-align-table>
默认表头及表格内容左对齐，可以分别设置不同字段的表头及表格内容对齐方式。

`zg-table`设置`align`属性可以设置整体表格的对齐方式，默认`left`左对齐，可配置项：`left`、`center`、`right`。

`column`中可单独为某个字段配置`align`，优先级`column配置的align` > `zg-table配置的align`。

表头对齐`header-align`同理，如果不设置对齐方式同`column`和`zg-table`设置的`align`

<<< @/docs/.vuepress/components/example/align-table.vue