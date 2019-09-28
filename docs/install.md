# 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
``` html
npm i v-plugs-ayu -S
```

### 快速上手
在man.js中引入即可:
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

### Hello world
通过 CDN 的方式我们可以很容易地使用 Ayu 写出一个 Hello world 页面
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

## 我为什么要造这个轮子
因为我想用自己的东西，感觉就是不一样，如果你能用到ayu，我将万分荣幸。
