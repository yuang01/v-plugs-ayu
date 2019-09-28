# 自定义主题
ayu 可以轻松实现自定义主题，从而满足使用者个性化的需求。只需要前端构建环境支持`sass`编译，无需安装另外的工具。可通过定义sass变量的方式配置颜色等。方法如下：

1. 新建一个scss文件，叫`custom.scss`, 假如放在和main.js同级目录
``` html
// 更改变量
$color-primary: blue;
$color-success: green;
$color-info:  skyblue;
$color-warning: orange;
$color-danger: red;

@import 'v-plugs-ayu/examples/style/index.scss';
```

2. 在程序入口(main.js)中引入自定义scss文件
``` html

import Vue from 'vue'
import ayu from 'v-plugs-ayu'
import './custom.scss'

Vue.use(ayu)
```
最终效果如下:


<img src="../examples/assets/button.png">