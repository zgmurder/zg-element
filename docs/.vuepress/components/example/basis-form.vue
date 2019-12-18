<template>
  <zg-form :schema="schema"  label-width="80px"></zg-form>
</template>

<script>
export default {
  name: 'BasisForm',
  data () {
    return {
      schema: [
        {
          type: 'input',
          vModel: 'name',
          label: '活动名称',
        },
        {
          type: 'switch',
          vModel: 'delivery',
          label: '即时配送'
        },
        {
          type: 'radio-group',
          vModel: 'type',
          options: ['美食/餐厅线上活动', '地推活动', '线下主题活动', '单纯品牌曝光'],
          label: '活动性质'
        },
        {
          type: 'checkbox-group',
          vModel: 'checkbox',
          options: ['区域一', '区域二'],
          required: true,
          label: '活动区域'
        },
        {
          type: 'input',
          config: {
            type: 'textarea'
          },
          vModel: 'desc',
          label: '活动形式'
        },
      ]
    }
  },
}
</script>
