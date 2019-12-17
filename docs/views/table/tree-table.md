### 树形数据与懒加载
2.8.0+版本支持树形表格

<example-tree-table></example-tree-table>
用法同`el-table`，当 `row` 中包含 `children` 字段时，被视为树形数据。渲染树形数据时，必须要指定 `row-key`。支持子节点数据异步加载。设置 Table 的 `lazy` 属性为 true 与加载函数 `load` 。通过指定 `row` 中的 `hasChildren` 字段来指定哪些行是包含子节点。`children` 与 `hasChildren` 都可以通过 `tree-props` 配置。

<<< @/docs/.vuepress/components/example/tree-table.vue