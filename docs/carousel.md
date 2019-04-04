## Carousel 幻灯片
在有限空间内，循环播放同一类型的图片、文字等内容

<!-- ### 基础用法
:::demo
``` html
<ayu-carousel height="300px" arrow="always">
  <ayu-carousel-item v-for="(item, index) in cardata" :key="index">
    <img :src="item.src" alt="" style="width:100%;">
  </ayu-carousel-item>
</ayu-carousel>
<script>
export default {
  data() {
    return {
      cardata: [
        { src: 'https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          { src: 'https://images.pexels.com/photos/1520145/pexels-photo-1520145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          { src: 'https://images.pexels.com/photos/5946/books-yellow-book-reading.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
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
::: -->

### 滚动轮播
:::demo
``` html
<ayu-carousel height="300px" type="slide">
  <ayu-carousel-item v-for="(item, index) in cardata" :key="index">
    <img :src="item.src" alt="" style="width:100%;">
  </ayu-carousel-item>
</ayu-carousel>
<script>
export default {
  data() {
    return {
      cardata: [
        { src: 'https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          { src: 'https://images.pexels.com/photos/1520145/pexels-photo-1520145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          { src: 'https://images.pexels.com/photos/5946/books-yellow-book-reading.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
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
<ayu-carousel height="300px" type="fade">
  <ayu-carousel-item v-for="(item, index) in cardata" :key="index">
    <img :src="item.src" alt="" style="width:100%;">
  </ayu-carousel-item>
</ayu-carousel>
<script>
export default {
  data() {
    return {
      cardata: [
        { src: 'https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          { src: 'https://images.pexels.com/photos/1520145/pexels-photo-1520145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          { src: 'https://images.pexels.com/photos/5946/books-yellow-book-reading.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
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
<ayu-carousel height="300px" arrow="always" :interval="5000">
  <ayu-carousel-item v-for="(item, index) in cardata" :key="index">
    <img :src="item.src" alt="" style="width:100%;">
  </ayu-carousel-item>
</ayu-carousel>
<script>
export default {
  data() {
    return {
      cardata: [
        { src: 'https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          { src: 'https://images.pexels.com/photos/1520145/pexels-photo-1520145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          { src: 'https://images.pexels.com/photos/5946/books-yellow-book-reading.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
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