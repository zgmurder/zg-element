### 排序
对表格进行排序，可快速查找或对比数据

<example-sort-table></example-sort-table>
在`column`相应列设置`sortable`属性即可实现以该列为基准的排序，接受一个`Boolean`，默认为`false`。可以通过 `zg-table` 的default-sort属性设置默认的排序列和排序顺序。可以使用`sort-method`或者`sort-by`使用自定义的排序规则。如果需要后端排序，需将`sortable`设置为`custom`，同时在 `zg-table` 上监听`sort-change`事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了`formatter`属性，它用于格式化指定列的值，接受一个`Function`，会传入两个参数：`row`和`column`，可以根据自己的需求进行处理。

<<< @/docs/.vuepress/components/example/sort-table.vue