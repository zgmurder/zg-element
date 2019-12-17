### 自定义索引
若表格展示的是各类数字，可以在表尾显示各列的合计。

<example-custom-index-table></example-custom-index-table>
通过给 `type=index` 的列传入 `index` 属性，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 0 开始）作为参数，返回值将作为索引展示。

<<< @/docs/.vuepress/components/example/custom-index-table.vue