---
title: 我的组件篇之input组件
date: 2018-09-16 11:06
categories: "vue组件"
tags: 'vue'
---
# 前言
之前在做项目的时候会用到自己写的组件，但是呢，换了一个项目之后就得重新拷贝组件，这样挺麻烦的，所以呢，就自己在vue3.0的基础上搞了个自己的<a href="https://github.com/YuAngBoy/v-plugs-ayu/tree/dev" target="_blank">组件库</a>，当然现在只有一个组件-->FloatInput组件
<!-- more -->
# FloatInput预览
![预览](https://yuang.site//images/myplug-floatinput.gif)
# 使用
首先可以先
``` bash
npm config set registry https://registry.npmjs.org/
```
然后
``` bash
npm install --save v-plugs-ayu
```
在man.js中引入即可
``` javascript
import "v-plugs-ayu/dist/personal-component.css";
import "v-plugs-ayu";
```
页面中直接使用就行了
``` html
<float-input></float-input>
or
<FloatInput></FloatInput>
```
# 参数Props
参数|说明|类型|可选值|默认值
---|--|---|---|--|---|---
placeholder|提示信息|string|-|-
type|输入框类型|string|text、password、email|text
required|是否必填|boolean|true、false|false
hascolor|自带的输入框颜色|string|has-default、has-danger、has-success、has-warning、has-info|has-default
color|自定义输入框颜色，若果has-color和color同时存在，则优先color参数|string|red、blue、#000等等|-
# 结语
我相信，随着我技术不断地提升，可以写出更多更好的组件的，加油！！
