<template>
  <zg-form :schema="schema" label-width="80px"></zg-form>
</template>

<script>
export default {
  name: 'BasisForm',
  data () {
    return {
      schema: [
        {
          type: 'input',
          vModel: 'email',
          label: '邮箱',
          rules:[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]
        },
        {
          type: 'select',
          config: {
            style: {
              width: '100%'
            }
          },
          vModel: 'date1',
          options: ['区域一', '区域二'],
          label: '活动区域',
        },
        {
          render (h, { that, formData, context }) {
            return <div>
              <el-button type="primary" on-click="submitForm('dynamicValidateForm')">提交</el-button>
              <el-button on-click={()=>{
                console.log(111);
                
              }}>新增域名</el-button>
              <el-button on-click="resetForm('dynamicValidateForm')">重置</el-button>
            </div>
          }
        }
      ]
    }
  },
}
</script>
