<template>
   <input type="text"
          @input="handleInput"
          @blur="handleBlur"
          :value="defaultValue"
   >
</template>

<script>
   import Emitter from './emitter.js'
   export default {
       name: "aiInput",
       mixins: [Emitter],
       props: {
           value: {
               type: [String, Number],
               default: ''
           }
       },
       data(){
           return {
               defaultValue: this.value
           }  
       },
       watch:{
           value (val) {
               this.defaultValue = val;
           }
       },
       methods:{
           /**
            * change 事件
            * @param event
            */
           handleInput(event){
               // 当前model 赋值
               this.defaultValue = event.target.value;
               // vue 原生的方法 return 出去
               this.$emit('input',event.target.value);
               // 将当前的值发送到 ayuFormItem 进行校验
               this.dispatch('ayuFormItem','on-form-change',event.target.value)
           },
           /**
            * blur 事件
            * @param event
            */
           handleBlur(event){
               // vue 原生的方法 return 出去
               this.$emit('blur',event.target.value);
               // 将当前的值发送到 ayuFormItem 进行校验
               this.dispatch('ayuFormItem','on-form-blur',event.target.value)
           }
       }
   }
</script>
