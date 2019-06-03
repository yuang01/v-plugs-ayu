## Radio 单选框
在一组备选项中进行单选
<script>
  export default {
    data() {
      return {
        sex: 1,
        sex2: 1,
        radio: 2,
      };
    },
  }
</script>
### 基础用法
::: demo 要使用 `Radio` 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是String、Number或Boolean。
``` html
<ayu-radio :label="1" v-model="sex">男生</ayu-radio>
<ayu-radio :label="2" v-model="sex">女生</ayu-radio>
<script>
  export default {
    data() {
      return {
        sex: 1,
      };
    },
  }
</script>
```
:::


### 禁用状态
::: demo 只要在ayu-radio元素中设置`disabled`属性即可，它接受一个Boolean，true为禁用。
``` html
<ayu-radio :label="1" v-model="sex2" disabled>男生</ayu-radio>
<ayu-radio :label="2" v-model="sex2" disabled>女生</ayu-radio>
<script>
  export default {
    data() {
      return {
        sex2: 1,
      };
    },
  }
</script>
```
:::

### 单选框组
适用于在多个互斥的选项中选择的场景
::: demo 将单选框包裹在`<ayu-radio-group>`标签里面
``` html
<ayu-radio-group v-model="radio">
  <ayu-radio :label="1">选项一</ayu-radio>
  <ayu-radio :label="2">选项二</ayu-radio>
  <ayu-radio :label="3">选项三</ayu-radio>
</ayu-radio-group>
<script>
  export default {
    data() {
      return {
        radio: 2,
      };
    },
  }
</script>
```
:::

### Radio Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|value / v-model|绑定值|string / number / boolean|-|-
|label|Radio 的 value|string / number / boolean|-|-
|disabled|是否禁用|Boolean|true/false|false
|name|原生 name 属性|string|-|-

### Radio-group Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|value / v-model|绑定值|string / number / boolean|-|-
|disabled|是否禁用|Boolean|true/false|false

### Radio-group Events
|事件名称|说明|回调函数
|:---|:---|:---|:---|:---
|change|绑定值变化时触发的事件|选中的 Radio label 值