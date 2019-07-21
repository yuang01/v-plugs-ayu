## InputNumber 计数器
仅允许输入标准的数字值，可定义范围
<script>
  export default {
    data() {
      return {
        num: 1,
        num2: 1,
        num3: 1,
        num4: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
### 基础用法
::: demo 使用`v-model`绑定变量即可，变量的初始值即为默认值。
``` html
<template>
  <ayu-input-number v-model="num" @change="handleChange"></ayu-input-number>
</template>

<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```
:::

### 禁用状态
::: demo `disabled`接收一个Boolean值
``` html
<template>
  <ayu-input-number v-model="num2" :disabled="true"></ayu-input-number>
</template>

<script>
  export default {
    data() {
      return {
        num2: 1
      };
    },
  };
</script>
```
:::

### 步数

允许定义递增递减的步数控制
::: demo 设置`step`属性可以控制步长，接收一个`Number`。
``` html
<template>
  <ayu-input-number v-model="num3" :step="5"></ayu-input-number>
</template>

<script>
  export default {
    data() {
      return {
        num3: 1
      };
    },
  };
</script>
```
:::

### 最大值和最小值
::: demo 设置`max`和`min`属性设置最大值和最小值，接收一个`Number`。
``` html
<template>
  <ayu-input-number v-model="num4" :step="5" :max="20" :min="0"></ayu-input-number>
</template>

<script>
  export default {
    data() {
      return {
        num4: 1
      };
    },
  };
</script>
```
:::

### Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|value / v-model|绑定值|number|-|0
|min|设置计数器允许的最小值|number|-|-Infinity
|max|设置计数器允许的最大值|number|-|Infinity
|step|计数器步长|number|-|1
|disabled|是否禁用计数器|Boolean|true/false|false

### Events
事件名称|说明|回调参数
:---|:---|:---
change|绑定值被改变时触发|最后变更的值