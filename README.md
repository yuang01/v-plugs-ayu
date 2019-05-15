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
Vue.use(ayu)
```
### CDN
在页面上引入 js 文件即可开始使用
``` javascript
<script src="https://cdn.jsdelivr.net/npm/v-plugs-ayu/lib/ayu.umd.min.js"></script>
```
> 建议使用 CDN 引入 Ayu 的用户在链接地址上锁定版本

组件和文档正在编写和完善中，感谢您的关注和支持，谢谢。

<a href="https://yuang01.github.io/v-plugs-ayu/dist/#/" target="_blank">文档</a> | <a href="https://yuang01.github.io/v-plugs-ayu/dist/#/" target="_blank">document</a>

### Hello world
通过 CDN 的方式我们可以很容易地使用 Ayu 写出一个 Hello world 页面,新建一个html页面,复制以下内容即可
``` html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>ayu</title>
  <style type="text/css">
  </style>
</head>

<body>
  <div id="app">
    <ayu-carousel height="500px" type="slide">
      <ayu-carousel-item v-for="(item, index) in cardata" :key="index">
        <img :src="item.src" alt="" style="width:100%;">
      </ayu-carousel-item>
    </ayu-carousel>
    <ayu-button type="primary" @click="open()">点击我</ayu-button>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://cdn.jsdelivr.net/npm/v-plugs-ayu/lib/ayu.umd.min.js"></script>
  <script>
    var vm = new Vue({
      el: '#app',
      data: {
        cardata: [
          { src: 'https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          { src: 'https://images.pexels.com/photos/1520145/pexels-photo-1520145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          { src: 'https://images.pexels.com/photos/5946/books-yellow-book-reading.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
        ],
      },
      methods: {
        open() {
          this.$alert({
            title: '我是标题',
            content: '我是内容',
            onConfirm: () => {
              this.$message({
                content: '你点了确定哦'
              })
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
