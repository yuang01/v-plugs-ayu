## Button 按钮
常用的操作按钮
### 基础用法
:::demo
``` html
<ayu-button size="large">大型按钮</ayu-button>
<ayu-button size="medium">中型按钮</ayu-button>
<ayu-button size="small">小型按钮</ayu-button>
<ayu-button size="mini">超小按钮</ayu-button>
```
:::

### 圆角按钮
:::demo
``` html
<ayu-button size="large" round>大型按钮</ayu-button>
<ayu-button size="medium" round>中型按钮</ayu-button>
<ayu-button size="small" round>小型按钮</ayu-button>
<ayu-button size="mini" round>超小按钮</ayu-button>
```
:::

### 不同类型
:::demo
``` html
<ayu-button>default</ayu-button>
<ayu-button type="primary">primary</ayu-button>
<ayu-button type="success">success</ayu-button>
<ayu-button type="info">info</ayu-button>
<ayu-button type="warning">warning</ayu-button>
<ayu-button type="danger">danger</ayu-button>
```
:::

### 圆形状态
:::demo
``` html
<ayu-button circle icon="search"></ayu-button>
<ayu-button type="primary" circle icon="edit"></ayu-button>
<ayu-button type="success" circle icon="check"></ayu-button>
<ayu-button type="info" circle icon="message"></ayu-button>
<ayu-button type="warning" circle icon="star-on"></ayu-button>
<ayu-button type="danger" circle icon="delete"></ayu-button>
```
:::

### 加载按钮
:::demo
``` html
<ayu-button loading type="primary">加载中</ayu-button>
```
:::

### 朴素风格
:::demo
``` html
<ayu-button outline>default</ayu-button>
<ayu-button type="primary" outline>primary</ayu-button>
<ayu-button type="success" outline>success</ayu-button>
<ayu-button type="info" outline>info</ayu-button>
<ayu-button type="warning" outline>warning</ayu-button>
<ayu-button type="danger" outline>danger</ayu-button>
```
:::

### 图标按钮
:::demo
``` html
<ayu-button type="primary" icon="left"></ayu-button>
<ayu-button type="primary" icon="right"></ayu-button>
<ayu-button type="primary" icon="delete"></ayu-button>
```
:::

### 禁用状态
:::demo
``` html
<ayu-button disabled>default</ayu-button>
<ayu-button type="primary" disabled>primary</ayu-button>
<ayu-button type="success" disabled>success</ayu-button>
<ayu-button type="info" disabled>info</ayu-button>
<ayu-button type="warning" disabled>warning</ayu-button>
<ayu-button type="danger" disabled>danger</ayu-button>
```
:::

### Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|size|按钮大小|String|large/medium/small/mini|medium
|type|按钮类型|String|default/primary/success/info/warning/danger|default
|round|是否圆角按钮|Boolean|true/false|false
|circle|是否圆形按钮|Boolean|true/false|false
|outline|是否为朴素按钮|Boolean|true/false|false
|icon|图标类名|String|-|-
|disabled|是否禁用按钮|Boolean|true/false|false
|loading|是否开启加载状态|Boolean|true|false

<style scoped>
.ayu-button {
  margin-right: 5px;
}
</style>