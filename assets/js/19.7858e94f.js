(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{545:function(r,e,t){"use strict";t.r(e);var n={name:"BasisForm",data:function(){var r=this;this.$createElement;return{schema:[{type:"input",vModel:"pass",label:"密码",config:{type:"password"},rules:{validator:function(e,t,n){t?(""!==r.$refs["zg-form"].formData.checkPass&&r.$refs["zg-form"].validateField("checkPass"),n()):n(new Error("请输入密码"))},trigger:"blur"}},{type:"input",vModel:"checkPass",label:"确认密码",config:{type:"password"},rules:{validator:function(e,t,n){t?t!==r.$refs["zg-form"].formData.pass?n(new Error("两次输入密码不一致!")):n():n(new Error("请再次输入密码"))},trigger:"blur"}},{type:"input",vModel:"age",label:"年龄",rules:{validator:function(r,e,t){if(!e)return t(new Error("年龄不能为空"));setTimeout((function(){+e?e<18?t(new Error("必须年满18岁")):t():t(new Error("请输入数字值"))}),1e3)},trigger:"blur"}},{render:function(r,e){e.that,e.formData;var t=e.context;return r("div",[r("el-button",{attrs:{type:"primary"},on:{click:function(){t.validate((function(r){if(!r)return console.log("error submit!!"),!1;alert("submit!")}))}}},["提交"]),r("el-button",{on:{click:function(){t.resetFields()}}},["重置"])])}}]}}},o=t(1),a=Object(o.a)(n,(function(){var r=this.$createElement;return(this._self._c||r)("zg-form",{ref:"zg-form",attrs:{schema:this.schema,"status-icon":"","label-width":"80px"}})}),[],!1,null,null,null);e.default=a.exports}}]);