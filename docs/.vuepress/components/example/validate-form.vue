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
          rules:[
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        },
        {
          type: 'select',
          config: {
            style: {
              width: '100%'
            }
          },
          vModel: 'region',
          options: ['区域一', '区域二'],
          label: '活动区域',
          rules:{ required: true, message: '请选择活动区域', trigger: 'change' }
        },
        {
          render (h,{formData,context}) {
            return <div>
              <el-col span={11}>
                <el-form-item prop="date1" rules={{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }}>
                  <el-date-picker type="date" placeholder="选择日期" value={formData.date1} on-input={value=>context.$set(formData,'date1',value)} style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col style="text-align:center" span={2}>-</el-col>
              <el-col span={11}>
                <el-form-item prop="date2" rules={{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }}>
                  <el-date-picker type="date" placeholder="选择日期" value={formData.date2} on-input={value=>context.$set(formData,'date2',value)} style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </div>
          },
          label: '活动时间',
          required:true
        },
        {
          type: 'switch',
          vModel: 'delivery',
          label: '即时配送',
        },
        {
          type: 'checkbox-group',
          vModel: 'type',
          options: ['美食/餐厅线上活动', '地推活动', '线下主题活动', '单纯品牌曝光'],
          label: '活动性质',
          rules:{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        },
        {
          type: 'radio-group',
          vModel: 'resource',
          options: ['线上品牌商赞助', '线下场地免费'],
          rules:{ required: true, message: '请选择活动资源', trigger: 'change' },
          label: '特殊资源'
        },
        {
          type: 'input',
          config: {
            type: 'textarea'
          },
          vModel: 'desc',
          label: '活动形式'
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
