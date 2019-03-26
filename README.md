# v-plugs-ayu · ![npm](https://img.shields.io/npm/v/v-plugs-ayu.svg?color=success) ![license](https://img.shields.io/github/license/yuang01/v-plugs-ayu.svg) ![downloads](https://img.shields.io/npm/dt/v-plugs-ayu.svg)
一个基于vue.js的组件库 (A Component Library Based on vue.js)
## 安装
``` bash
npm install v-plugs-ayu --save
```
在man.js中引入即可
``` javascript
import 'v-plugs-ayu/lib/ayu.css'
import ayu from 'v-plugs-ayu'
Vue.use(ayu)
```
## FloatInput组件预览
![预览](https://yuang.site//images/myplug-floatinput.gif)

页面中直接使用以下标签就行了
``` html
<ayu-floatinput></ayu-floatinput>
or
<ayuFloatinput></ayuFloatinput>
``` 
### 参数Props
<table>
    <tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr>
    <tr><td>value(v-model)</td><td>值</td><td>string</td><td>-</td><td>-</td></tr>
    <tr><td>placeholder</td><td>提示信息</td><td>string</td><td>-</td><td>-</td></tr>
    <tr><td>type</td><td>输入框类型</td><td>string</td><td>text、password、email</td><td>text</td></tr>
    <tr><td>required</td><td>是否必填</td><td>boolean</td><td>true、false</td><td>false</td></tr>
    <tr><td>hascolor</td><td>自带的输入框颜色</td><td>string</td><td>has-default、has-danger、has-success、has-warning、has-info</td><td>has-default</td></tr>
    <tr><td>color</td><td>自定义输入框颜色，如果has-color和color同时存在，则优先color参数</td><td>string</td><td>red、blue、#000等</td><td>-</td></tr>
</table>

## pagination分页组件组件预览
![预览](https://yuang.site//images/pagination.gif)
页面中直接使用以下标签就行了
``` html
<ayu-pagination></ayu-pagination>
```
### 参数Props
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
showTotal|显示总条数|boolean|true、false|false
showJumper|显示前往多少页的input|boolean|true、false|false
page-size|每页显示条目个数，支持 .sync 修饰符|number|-|10
total|总条目数|number|-|-
curpage|当前页数，支持 .sync 修饰符|number|-|1
pagination-size|组件大小|string|pagination-sm、pagination-lg|-
bgc|组件颜色|string|任意颜色值|#3e8ef7
prevText|上一页文字|string|任意|&lt;(向左箭头)
nextText|下一页文字|string|任意|&gt;(向右箭头)
disabled|是否禁用|boolean|true、false|false
### 事件
事件名称|说明|回调参数|-|-
:---|:---|:---|:---|:---
size-change|pageSize 改变时会触发|每页条数|-|-
current-change|curpage 改变时会触发|当前页|-|-
prev-click|用户点击上一页按钮改变当前页后触发|当前页|-|-
next-click|用户点击下一页按钮改变当前页后触发|当前页|-|-
## Select选择器
![预览](https://github.com/yuang01/carousel/blob/gh-pages/images/select.gif)

页面中直接使用以下标签就行了
``` html
// select上添加disabled则全部禁用，option上的disabled是某一项禁用，在data中的options对象上对某一项添加disabled:true即可禁用某一项
<ayu-select v-model="inputValue" placeholder="请选择" disabled  multiple collapse-tags>
  <ayu-option 
    v-for="item in options" 
    :key="item.value" 
    :label="item.label" 
    :value="item.value"
    :disabled="item.disabled">
    {{ item.label }}
  </ayu-option>
</ayu-select>
```
### 参数Props
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
placeholder|占位符|String|-|请选择
optionKey|作为 value 唯一标识的键名，绑定值为对象类型时必填|String|-|value
multiple|是否多选|Boolean|true/false|false
disabled|是否禁用|Boolean|true/false|false
collapseTags|是否缩略已选项|Boolean|true/false|false

### 事件
事件名称|说明|回调参数|-|-
:---|:---|:---|:---|:---
change|在 Select 值改变时触发|Select Options|-|-
focus|在 Select 获得焦点时触发|event|-|-
blur|在 Select 失去焦点时触发|event|-|-

## Carousel幻灯片组件
![预览](https://github.com/yuang01/carousel/blob/gh-pages/images/carousel.gif)
页面中使用
``` html
<ayu-carousel height="300px" arrow="always" type="slide">
  <ayu-carousel-item v-for="(item, index) in cardata" :key="index">
    <img :src="item.src" alt="" style="width:100%;">
  </ayu-carousel-item>
</ayu-carousel>
```
### 参数Props
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
height|幻灯片的高度|String|-|-
initial-index|初始状态激活的幻灯片的索引，从 0 开始|Number|-|0
autoplay|是否自动切换|Boolean|true/false|true
interval|自动切换的时间间隔，单位为毫秒|Number|-|3000
type|幻灯片类型|String|slide/fade|-
arrow|切换箭头的显示时机|String|always/hover/never|hover
### 事件
事件名称|说明|回调参数|-|-
:---|:---|:---|:---|:---
change|幻灯片切换时触发|目前激活的幻灯片的索引，原幻灯片的索引|-|-

## Button组件
![预览](https://github.com/yuang01/carousel/blob/gh-pages/images/button.png)
页面中使用
``` html
<ayu-button >ayu按钮</ayu-button>
```
### 参数说明
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
size|按钮大小|String|large/medium/small/mini|medium
type|按钮类型|String|default/primary/success/info/warning/danger|default
round|是否圆角按钮|Boolean|true/false|false
circle|是否圆形按钮|Boolean|true/false|false
outline|是否为朴素按钮|Boolean|true/false|false
icon|图标类名|String|-|-
disabled|是否禁用按钮|Boolean|true/false|false
loading|是否开启加载状态|Boolean|true|false
### 事件
事件名称|说明|回调参数|-|-
:---|:---|:---|:---|:---
onClick|点击事件|-|-

## MessageBox组件
![预览](https://github.com/yuang01/carousel/blob/gh-pages/images/messagebox.gif)
页面中使用
``` javascript
<template>
  <ayu-button type="primaty" @click="open">点击打开 Message Box</ayu-button>
</template>

<script>
  export default {
    methods: {
      open() {
        // 或者this.$alert()
        this.$confirm({
          title: '我是标题',
          content: '我是内容',
          onConfirm: () => {
            this.msg = '你点了确定';
          },
          onCancel: () => {
            this.msg = '取消了哦';
          },
          onClose: () => {
            this.msg = '关闭了呢';
          }
        })
      }
    }
  }
</script>

```
### 参数
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
title|标题|String|-|'标题'
content|内容|String|-|'一段内容'
confirmButtonText|确认按钮的文字|String|-|'确定'
cancelButtonText|取消按钮的文字|String|-|'取消'
showCloseBtn|是否显示关闭按钮|Boolean|true/false|true

### 事件
事件名称|说明|回调参数|-|-
:---|:---|:---|:---|:---
onConfirm|点击确定触发该事件|-|-
onCancel|点击取消触发该事件|-|-
onConfirm|点击关闭触发该事件|-|-

## Icon组件
页面中使用
```
<ayu-icon icon-class="loading"></ayu-icon>
```
### 参数
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
icon-class|图标类名|String|-|-
spin|是否让图标执行旋转动画|Boolean|-|-

选取了几十种比较常见的图标类型，因为比较多，先暂时不一一列举出来，有时间再把图标的class展示出来，供选择使用。
更多组件，敬请期待...
