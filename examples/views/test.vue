<template>
 <div class="home">
   <button @click="changeButton">测试</button>
   <ai-form ref="formItems" :model="formValidate" :rules="ruleValidate">
     <ai-form-item label="用户名" prop="name">
       <ai-input  v-model="formValidate.name"/>
     </ai-form-item>
     <ai-form-item label="邮箱" prop="name">
       <ai-input  v-model="formValidate.mail"/>
     </ai-form-item>
   </ai-form>

   <ayu-input placeholder="请输入内容" @focus="aa" v-model="inputValue7" round />
 </div>
</template>

<script>
 import AiForm from "./form";
 import AiFormItem from "./form-item";
 import AiInput from "./ai-input";
export default {
   name: 'test',
   components: {AiInput, AiFormItem, AiForm},
   data(){
       return{
         inputValue7:'',
           formValidate: {
               name: '123z',
               mail: ''
           },
           ruleValidate: {
               name: [
                   { required: true, message: '用户名不能为空', trigger: 'blur' },
               ],
               mail: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ],
           }
       }
   },
   methods:{
     aa(e) {
       console.log('aa', e);
     },
       changeButton(){
        //    this.$refs.formItems.resetFields() // 清空方法
           this.$refs.formItems.validate() // 验证方法
               .then(res=>{
                   console.log(res)
               })
       }
   },
}
</script>
