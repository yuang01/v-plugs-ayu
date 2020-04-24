# v-plugs-ayu

<div align=center>
<img src="./examples/assets/ayu.png">
</div>
<div align=center>
<img src="https://img.shields.io/npm/v/v-plugs-ayu.svg?color=success">
<img src="https://img.shields.io/github/license/yuang01/v-plugs-ayu.svg">
<img src="https://img.shields.io/npm/dt/v-plugs-ayu.svg">
<p class="desc">一个基于vue.js的组件库 (A Component Library Based on vue.js)</p>
</div>

## 安装
### npm
``` bash
npm i v-plugs-ayu -S
```
在man.js中引入即可开始使用
``` javascript
import ayu from 'v-plugs-ayu'
import 'v-plugs-ayu/lib/ayu.css'
Vue.use(ayu)
```
### CDN
在页面上引入 css和js 文件即可开始使用
``` html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/v-plugs-ayu/lib/ayu.css">
<!-- 引入js -->
<script src="https://cdn.jsdelivr.net/npm/v-plugs-ayu/lib/ayu.umd.min.js"></script>
```
> 建议使用 CDN 引入 Ayu 的用户在链接地址上锁定版本

组件和文档正在编写和完善中，感谢您的关注和支持，谢谢, **本代码仅供交流学习，不提供维护承诺**。

<a href="https://yuang01.github.io/v-plugs-ayu/dist/#/" target="_blank">文档</a> | <a href="https://yuang01.github.io/v-plugs-ayu/dist/#/" target="_blank">document</a>

### Hello world
通过 CDN 的方式我们可以很容易地使用 Ayu 写出一个 Hello world 页面,新建一个html页面,复制以下内容即可
``` html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>ayu</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/v-plugs-ayu/lib/ayu.css">
  <style type="text/css">
  </style>
</head>

<body>
  <div id="app">
    <ayu-button type="primary" @click="open()">点击我</ayu-button>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://cdn.jsdelivr.net/npm/v-plugs-ayu/lib/ayu.umd.min.js"></script>
  <script>
    var vm = new Vue({
      el: '#app',
      data: {
        inputValue: ''
      },
      methods: {
        open() {
          this.$alert({
            title: '我是标题',
            content: '我是内容',
            onConfirm: () => {
              alert('你点了确定哦');
            }
          })
        }
      },
      created() {}
    })
  </script>
</body>

</html>
```
