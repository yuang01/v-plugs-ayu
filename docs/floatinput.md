## Floatinput 浮动输入框
输入框label向上浮动效果

<script>
export default {
  data() {
    return {
      val: '',
      val2: '',
      val3: '',
      val4: '',
      val5: '',
      val6: '',
      val7: ''
    }
  }
}
</script>

### 基础用法
:::demo
``` html
<ayu-floatinput v-model="val" placeholder="title" />
```
:::

### 不同类型
:::demo
``` html
<ayu-floatinput v-model="val" placeholder="title" type="password" />
```
:::

### 不同颜色
:::demo
``` html
<div class="m-b-10">
  <ayu-floatinput v-model="val2" placeholder="title" hascolor="has-default" />
</div>
<div class="m-b-10">
  <ayu-floatinput v-model="val3" placeholder="title" hascolor="has-success" />
</div>
<div class="m-b-10">
  <ayu-floatinput v-model="val4" placeholder="title" hascolor="has-info" />
</div>
<div class="m-b-10">
  <ayu-floatinput v-model="val5" placeholder="title" hascolor="has-warning" />
</div>
<div class="m-b-10">
  <ayu-floatinput v-model="val6" placeholder="title" hascolor="has-danger" />
</div>
```
:::

### 自定义颜色
:::demo
``` html
<ayu-floatinput v-model="val7" placeholder="title" color="#000" />
```
:::

<style scoped>
.float_input {
  width: 250px!important;
}
.m-b-10 {
  margin-bottom: 10px;
}
</style>
### Attributes
<table>
  <tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
  <tr><td>value(v-model)</td><td>值</td><td>string</td><td>-</td><td>-</td></tr>
  <tr><td>placeholder</td><td>提示信息</td><td>string</td><td>-</td><td>-</td></tr>
  <tr><td>type</td><td>输入框类型</td><td>string</td><td>text、password、email</td><td>text</td></tr>
  <tr><td>required</td><td>是否必填</td><td>boolean</td><td>true、false</td><td>false</td></tr>
  <tr><td>hascolor</td><td>自带的输入框颜色</td><td>string</td><td>has-default、has-danger、has-success、has-warning、has-info</td><td>has-default</td></tr>
  <tr><td>color</td><td>自定义输入框颜色，如果has-color和color同时存在，则优先color参数</td><td>string</td><td>red、blue、#000等</td><td>-</td></tr>
</table>