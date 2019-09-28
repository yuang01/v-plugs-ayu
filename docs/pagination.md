# Pagination 分页
当数据量过多时，使用分页分解数据。

### 基础用法
:::demo
``` html
<ayu-pagination total="500" :curpage="currentPage"></ayu-pagination>
<script>
export default {
  data() {
    return {
      currentPage: 1
    }
  }
}
</script>
```
:::

### 不同大小
:::demo
``` html
<span class="describe">小型分页</span>
<ayu-pagination total="500" :curpage="currentPage" pagination-size="pagination-sm"></ayu-pagination>
<span class="describe">默认分页</span>
<ayu-pagination total="500" :curpage="currentPage"></ayu-pagination>
<span class="describe">大型分页</span>
<ayu-pagination total="500" :curpage="currentPage" pagination-size="pagination-lg"></ayu-pagination>
<script>
export default {
  data() {
    return {
      currentPage: 1
    }
  }
}
</script>
<style scoped>
  .describe {
    display: block;
    margin: 10px 0;
  }
</style>
```
:::

### 附加功能
:::demo
``` html
<ayu-pagination total="500" :curpage="currentPage" showTotal showJumper></ayu-pagination>
<script>
export default {
  data() {
    return {
      currentPage: 1
    }
  }
}
</script>
```
:::

### 自定义颜色
:::demo
``` html
<ayu-pagination total="500" :curpage="currentPage" bgc="#11c26d"></ayu-pagination>
<script>
export default {
  data() {
    return {
      currentPage: 1
    }
  }
}
</script>
```
:::

### 禁用状态
:::demo
``` html
<ayu-pagination total="500" :curpage="currentPage" disabled showTotal showJumper></ayu-pagination>
<script>
export default {
  data() {
    return {
      currentPage: 1
    }
  }
}
</script>
```
:::

### Attributes
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
showTotal|显示总条数|boolean|true、false|false
showJumper|显示前往多少页的input|boolean|true、false|false
page-size|每页显示条目个数，支持 .sync 修饰符|number|-|10
total|总条目数|number|-|-
curpage|当前页数，支持 .sync 修饰符|number|-|1
pagination-size|组件大小|string|pagination-sm、pagination-lg|-
bgc|组件颜色|string|任意颜色值|-
prevText|上一页文字|string|任意|&lt;(向左箭头)
nextText|下一页文字|string|任意|&gt;(向右箭头)
disabled|是否禁用|boolean|true、false|false

### Events
事件名称|说明|回调参数|-|-
:---|:---|:---|:---|:---
size-change|pageSize 改变时会触发|每页条数|-|-
current-change|curpage 改变时会触发|当前页|-|-
prev-click|用户点击上一页按钮改变当前页后触发|当前页|-|-
next-click|用户点击下一页按钮改变当前页后触发|当前页|-|-