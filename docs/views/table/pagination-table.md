### 表格分页
表格支持开启分页显示

<example-pagination-table></example-pagination-table>
`zg-table`设置属性`pagination`即可开启分页，分页相关参数及用法同`el-pagination`。暂时新增几个新参数，`paginationTop`表示分页距离表格的间距，默认`15px`,`paginationAlign`分页的对齐方式，默认为`right`,分页整体显示在右侧，可配置`left`、`center`、`right`

::: tip
由于分页和表格的`current-change`冲突，所以分页请使用`p-current-change`
:::

<<< @/docs/.vuepress/components/example/pagination-table.vue