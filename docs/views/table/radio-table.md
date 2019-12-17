### 单选
选择单行数据时使用色块表示。

<example-radio-table></example-radio-table>
同 `El-Table` 组件，只需要配置`highlight-current-row`属性即可实现单选。之后由current-change事件来管理选中时触发的事件，它会传入`currentRow`，`oldCurrentRow`。
如果需要显示索引，可设置索引列`type`属性为`index`即可显示从 1 开始的索引号。

<<< @/docs/.vuepress/components/example/radio-table.vue