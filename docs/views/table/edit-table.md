### 普通形式表格编辑
数据简单的情况下，可以通过点击编辑按钮直接进行表格的编辑、保存、取消操作

<example-edit-table></example-edit-table>
由于编辑模式下数据格式不统一，如日期数据通过`DatePicker`选择，普通的文本通过`Input`，下拉选择的通过`ElSelect`等，所以就不进行整合了，
大家可以通过`render`自定义出任意效果的编辑模式，原理就是根据是否是编辑模式的字段，渲染不同的内容，
如本例中的`_edit`,为`true`的情况下渲染相应的编辑模式下的组件，否则就是普通的文本。

由于编辑模式中有取消，所以取消的时候得还原原数据，可以通过定义一个`defaultData`,该值为`JSON.parse(JSON.stringify(this.tableData.data))`,
加`JSON.parse`和`JSON.stringify`防止`defaultData`数据随着`this.tableData.data`的改变而改变，取消的时候通过`$index`索引从`defaultData`中拿到原数据，
然后根据`$index`索引修改`this.tableData.data`的数据

::: tip
由于`vuepress`不支持`JSX`的`v-model`，所以示例代码使用的`value`、`onChange`、`onInput`实现的双向绑定，正常环境下可直接使用`v-model`
:::

<<< @/docs/.vuepress/components/example/edit-table.vue