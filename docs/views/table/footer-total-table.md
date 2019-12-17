### 表尾合计行
若表格展示的是各类数字，可以在表尾显示各列的合计。

<example-footer-total-table></example-footer-total-table>
将`show-summary`设置为`true`就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过`sum-text`配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用`summary-method`并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。

<<< @/docs/.vuepress/components/example/footer-total-table.vue