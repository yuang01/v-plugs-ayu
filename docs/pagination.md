## Pagination 分页
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