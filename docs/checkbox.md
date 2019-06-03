## CheckBox 多选
一组备选项中进行多选
<script>
export default {
  data() {
    return {
      checked: true,
      checked1: false,
      checked2: true,
      checkbox2: [2],
      check4: []
    }
  }
}
</script>

### 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。
::: demo `ayu-checkbox`元素中定义v-model绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。
``` html
<ayu-checkbox v-model="checked">选择</ayu-checkbox>
<script>
export default {
  data() {
    return {
      checked: true,
    }
  }
}
</script>
```
:::

### 禁用状态
::: demo 设置`disabled`属性即可。
``` html
<ayu-checkbox v-model="checked1" disabled>选择</ayu-checkbox>
<ayu-checkbox v-model="checked2" disabled>选择</ayu-checkbox>
<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: true,
    }
  }
}
</script>

```
:::

### 多选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
::: demo `checkbox-group`元素能把多个 `checkbox` 管理为一组，只需要在 Group 中使用v-model绑定`Array`类型的变量即可。 `ayu-checkbox` 的 `label`属性是该 checkbox 对应的值。
``` html
<ayu-checkbox-group v-model="checkbox2">
  <ayu-checkbox :label="1">选项一</ayu-checkbox>
  <ayu-checkbox :label="2">选项二</ayu-checkbox>
  <ayu-checkbox :label="3">选项三</ayu-checkbox>
  <ayu-checkbox :label="4">选项四</ayu-checkbox>
</ayu-checkbox-group>

<script>
export default {
  data() {
    return {
      checkbox2: [2],
    }
  }
}
</script>
```
:::
### Checkbox Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|value / v-model|绑定值|string / number / boolean|-|-
|label|选中状态的值（只有在checkbox-group时有效）|string / number / boolean|-|-
|disabled|是否禁用|Boolean|true/false|false
|name|原生 name 属性|string|-|-

### Checkbox-group Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|value / v-model|绑定值|string / number / boolean|-|-
|disabled|是否禁用|Boolean|true/false|false

### Checkbox-group Events
|事件名称|说明|回调函数
|:---|:---|:---|:---|:---
|change|绑定值变化时触发的事件|更新后的值
