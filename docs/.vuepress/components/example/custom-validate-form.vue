<template>
  <zg-form :schema="schema" ref="zg-form"  status-icon label-width="80px"></zg-form>
</template>

<script>
export default {
  name: 'BasisForm',
  data () {
    const checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!+value) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      const validatePass = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入密码'));
        } else {
          if (this.$refs['zg-form'].formData.checkPass !== '') {
            this.$refs['zg-form'].validateField('checkPass');
          }
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.$refs['zg-form'].formData.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      schema: [
        {
          type: 'input',
          vModel: 'pass',
          label: '密码',
          config:{
            type:'password'
          },
          rules:{ validator: validatePass, trigger: 'blur' }
        },
        {
          type: 'input',
          vModel: 'checkPass',
          label: '确认密码',
          config:{
            type:'password'
          },
          rules:{ validator: validatePass2, trigger: 'blur' }
        },
        {
          type: 'input',
          vModel: 'age',
          label: '年龄',
          rules:{ validator: checkAge, trigger: 'blur' }
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
              <el-button on-click={()=>{
                context.resetFields();
              }} >重置</el-button>
            </div>
          }
        }
      ]
    }
  },
}
</script>
