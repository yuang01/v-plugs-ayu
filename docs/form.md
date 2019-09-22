## Form
<script>
  export default {
    data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        } else {
          callback()
        }
      };
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      };
      return {
        baseForm: {
          name: '',
          fruits: ''
        },
        inlineForm: {
          name: '',
          fruits: ''
        },
        options: [
          {
            label: '苹果',
            value: 'apple'
          },
          {
            label: '香蕉',
            value: 'Banana'
          },
          {
            label: '火龙果',
            value: 'Pitaya',
          },
          {
            label: '草莓',
            value: 'Strawberry'
          }
        ],
        formLabelAlign: {
          name: '',
          address: '',
          identity: ''
        },
        labelPosition: 'left',

        formValidate: {
          name: '',
          mail: '',
          fruits: [],
        },
        ruleValidate: {
          name: [
            { required: true, message: '用户名不能为空', trigger: 'blur' },
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
          fruits: [
            { type: 'array', required: true, message: '请选择水果', trigger: 'change' },
          ],
        },
        cusFormValidate: {
          name: '',
          age: ''
        },
        cusRules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
        },

        numFormValidate: {
          num: ''
        }
      }
    },
    methods:{
      onSubmit() {
        console.log('提交');
      },

      submitForm(name) {
        this.$refs[name].validate() // 验证方法
        .then(res => {
          console.log(res)
        })
      },
      resetForm(name) {
        this.$refs[name].resetFields() // 清空方法
      }
    }
  }
</script>
### 基础表单

::: demo 在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件
``` html
<ayu-form :model="baseForm" labelWidth="80px">
  <ayu-form-item label="用户名">
    <ayu-input v-model="baseForm.name"/>
  </ayu-form-item>
  <ayu-form-item label="水果">
    <ayu-select v-model="baseForm.fruits" placeholder="请选择">
      <ayu-option 
        v-for="item in options" 
        :key="item.value" 
        :label="item.label" 
        :value="item.value">
        {{ item.label }}
      </ayu-option>
    </ayu-select>
  </ayu-form-item>
  <ayu-form-item>
    <ayu-button>取消</ayu-button>
    <ayu-button type="primary" @click="onSubmit">确定</ayu-button>
  </ayu-form-item>
</ayu-form>

<script>
  export default {
    data() {
      return {
        baseForm: {
          name: '',
          fruits: ''
        },
        options: [
          {
            label: '苹果',
            value: 'apple'
          },
          {
            label: '香蕉',
            value: 'Banana'
          },
        ]
      }
    },
    methods:{
      onSubmit() {
        console.log('提交');
      }
    }
  }
</script>
```
:::

### 行内表单
::: demo 设置 `inline` 属性可以让表单域变为行内的表单域
``` html
<ayu-form ref="ruleForm" :model="inlineForm" labelWidth="80px" :inline="true">
  <ayu-form-item label="用户名">
    <ayu-input v-model="inlineForm.name"/>
  </ayu-form-item>
  <ayu-form-item label="水果">
    <ayu-select v-model="inlineForm.fruits" placeholder="请选择">
      <ayu-option 
        v-for="item in options" 
        :key="item.value" 
        :label="item.label" 
        :value="item.value">
        {{ item.label }}
      </ayu-option>
    </ayu-select>
  </ayu-form-item>
  <ayu-form-item>
    <ayu-button>取消</ayu-button>
    <ayu-button type="primary" @click="onSubmit">确定</ayu-button>
  </ayu-form-item>
</ayu-form>

<script>
  export default {
    data() {
      return {
        inlineForm: {
          name: '',
          fruits: ''
        },
        options: [
          {
            label: '苹果',
            value: 'apple'
          },
          {
            label: '香蕉',
            value: 'Banana'
          },
        ]
      }
    },
    methods:{
      onSubmit() {
        console.log('提交');
      }
    }
  }
</script>
```
:::

### 对齐方式
::: demo 通过设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`，当设为 `top` 时标签会置于表单域的顶部
``` html
<ayu-radio-group v-model="labelPosition">
  <ayu-radio label="left">左对齐</ayu-radio>
  <ayu-radio label="right">右对齐</ayu-radio>
  <ayu-radio label="top">顶部对齐</ayu-radio>
</ayu-radio-group>
<br />
<ayu-form :model="formLabelAlign" :label-position="labelPosition" label-width="80px">
  <ayu-form-item label="用户名">
    <ayu-input v-model="formValidate.name"/>
  </ayu-form-item>
  <ayu-form-item label="地址">
    <ayu-input v-model="formValidate.address"/>
  </ayu-form-item>
  <ayu-form-item label="身份证">
    <ayu-input v-model="formValidate.identity"/>
  </ayu-form-item>
  <ayu-form-item>
    <ayu-button>取消</ayu-button>
    <ayu-button type="primary" @click="onSubmit">确定</ayu-button>
  </ayu-form-item>
</ayu-form>

<script>
  export default {
    data() {
      return {
        formLabelAlign: {
          name: '',
          address: '',
          identity: ''
        },
        labelPosition: 'left'
      }
    }
  }
</script>
```
:::

### 表单验证
::: demo 定义`rules`进行表单验证
``` html
<ayu-form ref="ruleForm" :model="formValidate" :rules="ruleValidate"labelWidth="80px">
  <ayu-form-item label="用户名" prop="name">
    <ayu-input  v-model="formValidate.name"/>
  </ayu-form-item>
  <ayu-form-item label="邮箱" prop="mail">
    <ayu-input v-model="formValidate.mail"/>
  </ayu-form-item>
  <ayu-form-item label="水果" prop="fruits">
    <ayu-select v-model="formValidate.fruits" placeholder="请选择" multiple>
      <ayu-option label="苹果" value="apple">苹果</ayu-option>
      <ayu-option label="香蕉" value="bnana">香蕉</ayu-option>
    </ayu-select>
  </ayu-form-item>
  <ayu-form-item>
    <ayu-button @click="resetForm('ruleForm')">重置</ayu-button>
    <ayu-button type="primary" @click="submitForm('ruleForm')">确定</ayu-button>
  </ayu-form-item>
</ayu-form>

<script>
  export default {
    data() {
      return {
        formValidate: {
          name: '',
          mail: '',
          fruits: [],
        },
        ruleValidate: {
          name: [
            { required: true, message: '用户名不能为空', trigger: 'blur' },
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
          fruits: [
            { type: 'array', required: true, message: '请选择水果', trigger: 'change' },
          ],
        },
      }
    },
    methods: {
      submitForm(name) {
        this.$refs[name].validate() // 验证方法
        .then(res=> {
          console.log(res)
        })
      },
      resetForm(name) {
        this.$refs[name].resetFields() // 清空方法
      }
    }
  }
</script>
```
:::

### 自定义验证
::: demo 在`rules`中定义`validator`自定义验证
``` html
<ayu-form ref="cusRuleForm" :model="cusFormValidate" :rules="cusRules"  labelPosition="right" labelWidth="120px">
  <ayu-form-item label="用户名" prop="name">
    <ayu-input  v-model="cusFormValidate.name"/>
  </ayu-form-item>
  <ayu-form-item label="年龄" prop="age">
    <ayu-input  v-model.number="cusFormValidate.age"/>
  </ayu-form-item>
  <ayu-form-item>
    <ayu-button @click="resetForm('cusRuleForm')">重置</ayu-button>
    <ayu-button type="primary" @click="submitForm('cusRuleForm')">确定</ayu-button>
  </ayu-form-item>
</ayu-form>

<script>
  export default {
    data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        } else {
          callback()
        }
      };
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      };
      return {
        cusFormValidate: {
          name: '',
          age: ''
        },
        cusRules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      submitForm(name) {
        this.$refs[name].validate() // 验证方法
        .then(res=> {
          console.log(res)
        })
      },
      resetForm(name) {
        this.$refs[name].resetFields() // 清空方法
      }
    }
  }
</script>
```
:::

### 数字类型验证
::: demo 数字类型的验证需要在 v-model 处加上 `.number` 的修饰符，这是 Vue 自身提供的用于将绑定值转化为 number 类型的修饰符。
``` html
<ayu-form ref="numRuleForm" :model="numFormValidate" labelWidth="120px">
  <ayu-form-item 
    label="数字" 
    prop="num" 
    :rules="[
      { required: true, message: '数字不能为空'},
      { type: 'number', message: '数字必须为数字值'}
    ]">
    <ayu-input v-model.number="numFormValidate.num"/>
  </ayu-form-item>
  <ayu-form-item>
    <ayu-button @click="resetForm('numRuleForm')">重置</ayu-button>
    <ayu-button type="primary" @click="submitForm('numRuleForm')">确定</ayu-button>
  </ayu-form-item>
</ayu-form>

<script>
  export default {
    data() {
      return {
        numFormValidate: {
          num: ''
        }
      }
    },
    methods: {
      submitForm(name) {
        this.$refs[name].validate() // 验证方法
        .then(res=> {
          console.log(res)
        })
      },
      resetForm(name) {
        this.$refs[name].resetFields() // 清空方法
      }
    }
  }
</script>
```
:::

### Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|model|表单数据对象|object|—|—
|rules|表单验证规则|object|—|—
|inline|行内表单模式|Boolean|true/false|false
|label-position|表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width|string|right/left/top|right
|label-width|表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。|string|—|—

### Form Methods
方法名|说明|参数|
|:---|:---|:---|
|validate|对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise|object| Function(callback: Function(boolean, object))
|resetFields|对整个表单进行重置，将所有字段值重置为初始值并移除校验结果|—