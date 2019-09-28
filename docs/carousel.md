# Carousel 幻灯片
在有限空间内，循环播放同一类型的图片、文字等内容

<script>
export default {
  data() {
    return {
      cardata: [
        { src: 'https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/43156d89bbf94dd1ba580898481a9e8f.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/58c5fd3d07054f888a4364746eeb19e4.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/9a3c4d6016614eb89602006fd88cf35b.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/a6b9c15573e74064b6bac47f41b16c41.jpg'}
      ],
      cardata2: [
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/e9083dd47e3940d8af395ebdecb28a78.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/99cdeb1ea4eb4b7aa3cc46ac023f3c93.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/ab8a58ac79c7484d931dcf942da795c9.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/4eeb789fa9f649f0b28d7b1385ecca65.jpg'}
      ],
      cardata3: [
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/7ed1b3a8d76c4ad38593f0d63a22f242.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/f1d7b0cc0e9d439a92dce53fa5f05202.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/f0f00f8d72474e68b9b22a74b8bce68a.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/e2c255d254544e6f8e70503c5ffffbc4.jpg'}
      ]
    }
  }
}
</script>
### 滚动轮播
:::demo
``` html
<ayu-carousel height="350px" type="slide">
  <ayu-carousel-item v-for="(item, index) in cardata" :key="index">
    <img :src="item.src" alt="" style="width:100%;">
  </ayu-carousel-item>
</ayu-carousel>
<script>
export default {
  data() {
    return {
      cardata: [
        { src: 'https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/43156d89bbf94dd1ba580898481a9e8f.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/58c5fd3d07054f888a4364746eeb19e4.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/9a3c4d6016614eb89602006fd88cf35b.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/a6b9c15573e74064b6bac47f41b16c41.jpg'}
      ]
    }
  }
}
</script>
<style>
  .ayu-carousel {
    margin-bottom: 10px;
  }
</style>
```
:::

### 淡入淡出
:::demo
``` html
<ayu-carousel height="350px" type="fade">
  <ayu-carousel-item v-for="(item, index) in cardata2" :key="index">
    <img :src="item.src" alt="" style="width:100%;">
  </ayu-carousel-item>
</ayu-carousel>
<script>
export default {
  data() {
    return {
      cardata2: [
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/e9083dd47e3940d8af395ebdecb28a78.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/99cdeb1ea4eb4b7aa3cc46ac023f3c93.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/ab8a58ac79c7484d931dcf942da795c9.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/4eeb789fa9f649f0b28d7b1385ecca65.jpg'}
      ]
    }
  }
}
</script>
<style>
  .ayu-carousel {
    margin-bottom: 10px;
  }
</style>
```
:::

### 切换时间
:::demo
``` html
<ayu-carousel height="350px" arrow="always" :interval="5000">
  <ayu-carousel-item v-for="(item, index) in cardata3" :key="index">
    <img :src="item.src" alt="" style="width:100%;">
  </ayu-carousel-item>
</ayu-carousel>
<script>
export default {
  data() {
    return {
      cardata3: [
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/7ed1b3a8d76c4ad38593f0d63a22f242.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/f1d7b0cc0e9d439a92dce53fa5f05202.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/f0f00f8d72474e68b9b22a74b8bce68a.jpg'},
        { src: 'http://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/e2c255d254544e6f8e70503c5ffffbc4.jpg'}
      ]
    }
  }
}
</script>
<style>
  .ayu-carousel {
    margin-bottom: 10px;
  }
</style>
```
:::

### Attributes
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
height|幻灯片的高度|String|-|-
initial-index|初始状态激活的幻灯片的索引，从 0 开始|Number|-|0
autoplay|是否自动切换|Boolean|true/false|true
interval|自动切换的时间间隔，单位为毫秒|Number|-|3000
type|幻灯片类型|String|slide/fade|-
arrow|切换箭头的显示时机|String|always/hover/never|hover

### Events
事件名称|说明|回调参数|-|-
:---|:---|:---|:---|:---
change|幻灯片切换时触发|目前激活的幻灯片的索引，原幻灯片的索引|-|-