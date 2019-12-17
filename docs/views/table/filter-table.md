### 筛选
对表格进行筛选，可快速查找到自己想看的数据。

<example-filter-table></example-filter-table>
在列中设置 `filters` `filter-method`属性即可开启该列的筛选，`filters` 是一个数组，`filter-method` 是一个方法，它用于决定某些数据是否显示，会传入三个参数：`value`, `row` 和 `column`。

<<< @/docs/.vuepress/components/example/filter-table.vue