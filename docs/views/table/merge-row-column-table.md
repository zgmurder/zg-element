### 合并行或列
多行或多列共用一个数据时，可以合并行或列。

<example-merge-row-column-table></example-merge-row-column-table>
通过给`zg-table`传入`span-method`方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行`row`、当前列`column`、当前行号`rowIndex`、当前列号`columnIndex`四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表`rowspan`，第二个元素代表`colspan`。 也可以返回一个键名为`rowspan`和`colspan`的对象。

<<< @/docs/.vuepress/components/example/merge-row-column-table.vue