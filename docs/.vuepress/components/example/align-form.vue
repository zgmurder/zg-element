<template>
  <div>
    <el-radio-group v-model="labelPosition" size='small'>
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
      <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>
    <zg-form style="margin-top:20px" :schema="schema"  :label-position="labelPosition"  label-width="80px"></zg-form>
  </div>
</template>

<script>
export default {
  name: 'BasisForm',
  data () {
    return {
      labelPosition: 'right',
      schema: [
        {
          type: 'input',
          vModel: 'name',
          label: '活动名称',
        },
        {
          type: 'select',
          config:{
            style:{
              width:'100%'
            }
          },
          vModel: 'region',
          options: ['区域一', '区域二'],
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
