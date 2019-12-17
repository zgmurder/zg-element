module.exports = {
  title: 'zg-element', // 设置网站标题
  base: '/zg-element/',
  description: '基于element一些组件的封装', //描述
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件文档', link: '/views/' },
      { text: '知识库', link: '/knowledge/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/views/': [
        {
          title: '基于el-table组件的封装',
          collapsable: true,
          children: [
            'table/basis-table',
            'table/align-table',
            'table/stripe-table',
            'table/border-table',
            'table/status-table',
            'table/fixed-header-table',
            'table/fixed-column-table',
            'table/fluid-height-table',
            'table/multi-header-table',
            'table/radio-table',
            'table/multiple-table',
            'table/sort-table',
            'table/filter-table',
            'table/expand-row-table',
            'table/render-table',
            'table/tree-table',
            'table/render-header-table',
            'table/footer-total-table',
            'table/custom-index-table',
            'table/merge-row-column-table',
            'table/pagination-table',
            'table/merge-table',
            'table/edit-table',
            'table/edit-dialog-table',
          ]
        },
        // {
        //   title: 'el-form组件',
        //   collapsable: true,
        //   children: [
        //   ]
        // },
        // {
        //   title: '工具类组件',
        //   collapsable: true,
        //   children: [
        //   ]
        // },
        // {
        //   title: '方法类函数',
        //   collapsable: true,
        //   children: [
        //   ]
        // }
      ],
      '/knowledge/': [
        {
          title: 'CSS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'JS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'node知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'vue知识库',
          collapsable: false,
          children: [
          ]
        }
      ]
    }
  }
}