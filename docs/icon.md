# Icon字体图标
提供了一套常用的图标集合
> icon组件使用@click的时候加上.native修饰符，如@click.native=""

### 基础用法
::: demo
``` html
<ayu-icon icon-class="edit"></ayu-icon>
<ayu-icon icon-class="share"></ayu-icon>
<ayu-icon icon-class="delete"></ayu-icon>
<ayu-button icon="search" type="primary">搜索</ayu-button>
<style scoped>
.ayu-icon {
  margin-right: 5px;
}
</style>
```
:::

### 旋转图标
::: demo
``` html
<ayu-icon icon-class="loading" spin></ayu-icon>
<ayu-icon icon-class="setting" spin></ayu-icon>
```
:::

### 图表集合
<ul class="icon-list">
  <li v-for="item in iconName">
    <span class="icon"><ayu-icon :icon-class="item"></ayu-icon></span>
    <span>{{item}}</span>
  </li>
</ul>
<script>
export default {
  data() {
    return {
      iconName: ['info', 'error', 'success', 'warning', 'question', 'back', 'left', 'down', 'right', 'up', 'caret-left', 'caret-right', 'd-arrow-left', 'd-arrow-right', 'minus', 'plus', 'remove', 'circle-plus', 'remove-circle-outline', 'plus-circle-outline', 'close', 'check', 'circle-close', 'circle-check', 'circle-close-outline', 'circle-check-outline', 'Zoomout', 'ZoomIn', 'd-caret', 'sort', 'bx-sort-up', 'bx-sort-down', 'tickets', 'document', 'goods', 'soldout', 'news', 'message', 'date', 'printer', 'time', 'bell', 'mobile-phone', 'service', 'view','menu', 'more', 'more-outline', 'star-on', 'star-off', 'location', 'location1', 'phone', 'picture', 'delete', 'search', 'edit', 'drag', 'refresh', 'share', 'setting', 'upload', 'upload1', 'download', 'loading']
    }
  }
}
</script>

<style scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    padding: 0;
    border-left: 1px solid #babec1;
    border-top: 1px solid #babec1; 
  }
  li {
    display: block;
    flex: 0 0 20%;
    display: flex;
    flex-direction: column;
    line-height: 60px;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid #babec1;
    border-left: 0;
    border-top: 0;
  }
  .icon {
    display: block;
    height: 35px;
    font-size: 35px;
  }
</style>
