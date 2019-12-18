<template>
  <zg-form :schema="schema" inline></zg-form>
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
              <el-button type="primary" on-click={() => {
                context.validate((valid) => {
                if (valid) {
                  alert('submit!');
                } else {
                  console.log('error submit!!');
                  return false;
                }});
              }}>提交</el-button>
            </div>
          }
        }
      ]
    }
  },
}
</script>
