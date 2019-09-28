# Select 选择器
当选项过多时，使用下拉菜单展示并选择内容。
<script>
  export default {
    data() {
      return {
        inputValue: '',
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
        inputValue2: '',
        options2: [
          {
            label: '苹果',
            value: 'apple',
            disabled: true
          },
          {
            label: '香蕉',
            value: 'Banana'
          },
          {
            label: '火龙果',
            value: 'Pitaya',
            disabled: true
          },
          {
            label: '草莓',
            value: 'Strawberry'
          }
        ],
        inputValue3: ['apple', 'Banana'],
        options3: [
          {
            label: '苹果',
            value: 'apple',
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
        inputValue4: ['apple', 'Banana'],
        options4: [
          {
            label: '苹果',
            value: 'apple',
          },
          {
            label: '香蕉',
            value: 'Banana'
          },
          {
            label: '火龙果',
            value: 'Pitaya'
          },
          {
            label: '草莓',
            value: 'Strawberry'
          }
        ]
      }
    }
  }
</script>
### 基础用法
::: demo
``` html
<ayu-select v-model="inputValue" placeholder="请选择">
  <ayu-option 
    v-for="item in options" 
    :key="item.value" 
    :label="item.label" 
    :value="item.value">
    {{ item.label }}
  </ayu-option>
</ayu-select>
<script>
  export default {
    data() {
      return {
        inputValue: '',
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
        ]
      }
    }
  }
</script>
<style scoped>
  .select-wrapper {
    width: 200px;
  }
</style>
```
:::

### 禁用选项
::: demo
``` html
<ayu-select v-model="inputValue2" placeholder="请选择">
  <ayu-option 
    v-for="item in options2" 
    :key="item.value" 
    :label="item.label" 
    :value="item.value"
    :disabled="item.disabled">
    {{ item.label }}
  </ayu-option>
</ayu-select>
<script>
  export default {
    data() {
      return {
        inputValue2: '',
        options2: [
          {
            label: '苹果',
            value: 'apple',
            disabled: true
          },
          {
            label: '香蕉',
            value: 'Banana'
          },
          {
            label: '火龙果',
            value: 'Pitaya',
            disabled: true
          },
          {
            label: '草莓',
            value: 'Strawberry'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .select-wrapper {
    width: 200px;
  }
</style>
```
:::

### 基础多选
::: demo
``` html
<ayu-select v-model="inputValue3" placeholder="请选择" multiple>
  <ayu-option 
    v-for="item in options3" 
    :key="item.value" 
    :label="item.label" 
    :value="item.value">
    {{ item.label }}
  </ayu-option>
</ayu-select>
<script>
  export default {
    data() {
      return {
        inputValue3: ['apple', 'Banana'],
        options3: [
          {
            label: '苹果',
            value: 'apple',
          },
          {
            label: '香蕉',
            value: 'Banana'
          },
          {
            label: '火龙果',
            value: 'Pitaya'
          },
          {
            label: '草莓',
            value: 'Strawberry'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .select-wrapper {
    width: 200px;
  }
</style>
```
:::

### 缩略显示
::: demo
``` html
<ayu-select v-model="inputValue4" placeholder="请选择" multiple collapse-tags>
  <ayu-option 
    v-for="item in options4" 
    :key="item.value" 
    :label="item.label" 
    :value="item.value">
    {{ item.label }}
  </ayu-option>
</ayu-select>
<script>
  export default {
    data() {
      return {
        inputValue4: ['apple', 'Banana'],
        options4: [
          {
            label: '苹果',
            value: 'apple',
          },
          {
            label: '香蕉',
            value: 'Banana'
          },
          {
            label: '火龙果',
            value: 'Pitaya'
          },
          {
            label: '草莓',
            value: 'Strawberry'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .select-wrapper {
    width: 200px;
  }
</style>
```
:::

### 禁用状态
::: demo
``` html
<ayu-select v-model="inputValue" placeholder="请选择" disabled>
  <ayu-option 
    v-for="item in options" 
    :key="item.value" 
    :label="item.label" 
    :value="item.value">
    {{ item.label }}
  </ayu-option>
</ayu-select>
<script>
  export default {
    data() {
      return {
        inputValue: '',
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
        ]
      }
    }
  }
</script>
<style scoped>
  .select-wrapper {
    width: 200px;
  }
</style>
```
:::

### Attributes
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
placeholder|占位符|String|-|请选择
optionKey|作为 value 唯一标识的键名，绑定值为对象类型时必填|String|-|value
multiple|是否多选|Boolean|true/false|false
disabled|是否禁用|Boolean|true/false|false
collapseTags|是否缩略已选项|Boolean|true/false|false

### Events
事件名称|说明|回调参数|-|-
:---|:---|:---|:---|:---
change|在 Select 值改变时触发|Select Options|-|-
focus|在 Select 获得焦点时触发|event|-|-
blur|在 Select 失去焦点时触发|event|-|-
