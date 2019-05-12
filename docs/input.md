## Input 输入框
通过鼠标或键盘输入字符
### 基础用法
::: demo
``` html
<ayu-input placeholder="请输入内容" v-model="inputValue" />
```
:::

### 禁用状态
::: demo 通过 `disabled` 属性指定是否禁用 input 组件
``` html
<ayu-input placeholder="请输入内容" v-model="inputValue2" disabled />
```
:::

### 可清空
::: demo 通过 `clearable` 属性即可得到一个可清空的输入框
``` html
<ayu-input placeholder="请输入内容" v-model="inputValue3" clearable />
```
:::

### 密码框
::: demo 通过 `type` 属性即可选择普通input的type属性
``` html
<ayu-input placeholder="请输入内容" v-model="inputValue4" type="password" />
```
:::

### 带 icon 的输入框
::: demo 可以通过 `prefix-icon` 和 `suffix-icon` 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。
``` html
<div class="demo-input">
  属性方式：
  <ayu-input v-model="inputValue5" placeholder="请输入内容" prefixIcon="search" suffixIcon="date"></ayu-input>
</div>
<div class="demo-input">
  slot方式：
  <ayu-input v-model="inputValue6" placeholder="请输入内容">
    <ayu-icon slot="prefix" icon-class="search"></ayu-icon>
    <ayu-icon slot="suffix" icon-class="date"></ayu-icon>
  </ayu-input>
</div>
```
:::

### 圆角状态
::: demo 通过 `round` 属性即可为input带上圆角
``` html
<ayu-input placeholder="请输入内容" v-model="inputValue7" round />
```
:::

### 文本域
::: demo 用于输入多行文本信息，通过将 `type` 属性的值指定为 textarea。
``` html
<ayu-input placeholder="请输入内容" v-model="inputValue8" type="textarea" />
```
:::

### 复合型输入框
可前置或后置元素，一般为标签或按钮
::: demo 可通过 slot 来指定在 input 中前置或者后置内容。
``` html
<div class="demo-input-pend">
  <ayu-input placeholder="请输入内容" v-model="inputValue9">
    <template slot="prepend">https://</template>
  </ayu-input>
</div>

<div class="demo-input-pend">
  <ayu-input placeholder="请输入内容" v-model="inputValue10">
    <template slot="append">.com</template>
  </ayu-input>
</div>

<div class="demo-input-pend">
  <ayu-input placeholder="请输入内容" v-model="inputValue11">
    <template slot="prepend">https://</template>
    <template slot="append">.com</template>
  </ayu-input>
</div>
```
:::

### 不同尺寸
::: demo 可通过 `size` 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。
``` html
<div class="demo-input-size">
  <ayu-input v-model="inputValue12" size="large" placeholder="标题" suffixIcon="date"></ayu-input>
  <ayu-input v-model="inputValue13" placeholder="标题" suffixIcon="date"></ayu-input>
  <ayu-input v-model="inputValue14" size="small" placeholder="标题" suffixIcon="date"></ayu-input>
  <ayu-input v-model="inputValue15" size="mini" placeholder="标题" suffixIcon="date"></ayu-input>
</div>
```
:::

### Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|type|类型|String|text/textarea 和其他 原生 input 的 type 值|text
|value(v-model)|值|String/Number|-|-
|prefix-icon|输入框头部图标|String|-|-
|suffix-icon|输入框尾部图标|String|-|-
|round|是否为圆角状态|Boolean|true/false|false
|size|输入框大小|String|large/medium/small/mini|medium
|disabled|是否禁用|Boolean|true/false|false
|clearable|是否可清空|Boolean|true|false

### Events
事件名称|说明|回调参数
:---|:---|:---
change|在 Input 值改变时触发|(event: Event)
focus|在 Input 获得焦点时触发|(event: Event)
blur|	在 Input 失去焦点时触发|(event: Event)
<script>
export default {
  data() {
    return {
      inputValue: '',
      inputValue2: '',
      inputValue3: '',
      inputValue4: '',
      inputValue5: '',
      inputValue6: '',
      inputValue7: '',
      inputValue8: '',
      inputValue9: '',
      inputValue10: '',
      inputValue11: '',
      inputValue12: '',
      inputValue13: '',
      inputValue14: '',
      inputValue15: '',
    }
  },
  methods: {
    changeinput() {
      console.log('this is change');
    }
  }
}
</script>
<style scoped lang="scss">
  .ayu-input {
    width: 180px;
  }
  .demo-input {
    display: inline-flex;
    align-items: center;
    margin-right: 15px;
  }
  .demo-input-pend {
    .ayu-input {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .demo-input-size {
    display: inline-flex;
    justify-content: space-between;
    .ayu-input {
      margin-right: 10px;
    }
  }
</style>