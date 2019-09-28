# HoverTip 提示
常用于展示鼠标 hover 时的提示信息。

### 基础用法
::: demo
``` html
<ayu-hover-tip>
  <template slot="tip-part">向上</template>
</ayu-hover-tip>
<ayu-hover-tip placement="bottom-center">
  <template slot="tip-part">向下</template>
</ayu-hover-tip>
<ayu-hover-tip placement="left-center">
  <template slot="tip-part">向左</template>
</ayu-hover-tip>
<ayu-hover-tip placement="right-center">
  <template slot="tip-part">向右</template>
</ayu-hover-tip>
<style scoped>
.ayu-hover-tip {
  margin-left: 50px;
}
</style>
```
:::

### 自定义内容
::: demo
``` html
<ayu-hover-tip placement="bottom-center">
  <template slot="hover-part"><ayu-button>向下</ayu-button></template>
  <template slot="tip-part">向下</template>
</ayu-hover-tip>
```
:::

### 自定义提示内容
::: demo
``` html
<ayu-hover-tip placement="right-center">
  <template slot="hover-part"><ayu-button>向右</ayu-button></template>
  <template slot="tip-part">
    <img src="https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/f24088b960b846bab1d18705a3a96719.jpg" class="img">
  </template>
</ayu-hover-tip>
<style scoped>
  .img {
    width: 150px;
    height: 150px;
  }
</style>
```
:::

### 主题
::: demo
``` html
<ayu-hover-tip theme="dark">
  <template slot="hover-part"><ayu-button>向上</ayu-button></template>
  <template slot="tip-part">top-center 向上</template>
</ayu-hover-tip>

<ayu-hover-tip>
  <template slot="hover-part"><ayu-button>向上</ayu-button></template>
  <template slot="tip-part">top-center 向上</template>
</ayu-hover-tip>
```
:::

### 动画
::: demo
``` html
<ayu-hover-tip transition="fade">
  <template slot="hover-part"><ayu-button>向上</ayu-button></template>
  <template slot="tip-part">top-center 向上</template>
</ayu-hover-tip>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
```
:::

### Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|placement|tip数显的位置|String|top-center/bottom-center/left-center/right-center|top-center
|theme|主题|String|light/dark|light
|transition|动画|String|-|fade-in-linear
|disabled|tip是否可用|Boolean|true/false|false
