## Message 消息提示
常用于主动操作后的反馈提示
### 基础用法
从顶部出现，3 秒后自动消失。
<script>
  export default {
    methods: {
      open() {
        this.$message({
          content: '我是一个message'
        })
      },
      open1() {
        this.$message({
          type: 'success',
          content: '我是一个message'
        })
      },
      open2() {
        this.$message({
          type: 'warning',
          content: '我是一个message'
        })
      },
      open3() {
        this.$message({
          type: 'info',
          content: '我是一个message'
        })
      },
      open4() {
        this.$message({
          type: 'error',
          content: '我是一个message'
        })
      },
      open5() {
        this.$message({
          content: '<strong>这是 <i>HTML</i> 片段</strong>'
        })
      },
      open6() {
        this.$message({
          content: '这是一个message',
          verticalOffset: 100
        })
      },
      open7() {
        this.$message({
          content: '这是一个message',
          onClose: () => {
            console.log('message close');
          }
        })
      }
    }
  }
</script>
::: demo 使用$message方法调用message组件，接收对象中的content
``` html
<ayu-button @click="open()">打开消息提示</ayu-button>
<script>
  export default {
    methods: {
      open() {
        this.$message({
          content: '我是一个message'
        })
      }
    }
  }
</script>
```
:::
### 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。
::: demo 设置`type`字段可以定义不同的状态，默认为`info`
``` html
<ayu-button @click="open1()">成功</ayu-button>
<ayu-button @click="open2()">警告</ayu-button>
<ayu-button @click="open3()">消息</ayu-button>
<ayu-button @click="open4()">错误</ayu-button>

<script>
  export default {
    methods: {
      open1() {
        this.$message({
          type: 'success',
          content: '我是一个message'
        })
      },
      open2() {
        this.$message({
          type: 'warning',
          content: '我是一个message'
        })
      },
      open3() {
        this.$message({
          type: 'info',
          content: '我是一个message'
        })
      },
      open4() {
        this.$message({
          type: 'error',
          content: '我是一个message'
        })
      }
    }
  }
</script>
```
:::

### 使用 HTML 片段
message 属性支持传入 HTML 片段
::: demo
``` html
<ayu-button @click="open5()">打开消息提示</ayu-button>
<script>
  export default {
    methods: {
      open5() {
        this.$message({
          content: '<strong>这是 <i>HTML</i> 片段</strong>'
        })
      }
    }
  }
</script>
```
:::

### 自定义垂直偏移量
::: demo 设置`verticalOffset`字段可以定义message的位置
``` html
<ayu-button @click="open6()">打开消息提示</ayu-button>
<script>
  export default {
    methods: {
      open6() {
        this.$message({
          content: '这是一个message',
          verticalOffset: 100
        })
      }
    }
  }
</script>
```
:::

### 关闭事件
message消失执行onClose事件
::: demo
``` html
<ayu-button @click="open7()">打开消息提示</ayu-button>
<script>
  export default {
    methods: {
      open7() {
        this.$message({
          content: '这是一个message',
          onClose: () => {
            console.log('message close');
          }
        })
      }
    }
  }
</script>
```
:::

### Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|type|类型|String|success/warning/info/error|info
|verticalOffset|垂直偏移量(px为单位)|Number|-|30
|content|提示内容|String|-|-
|duration|显示时间, 毫秒。设为 0 则不会自动关闭|number|-|3000

### Events
事件名称|说明|回调参数
:---|:---|:---
onClose|在 message 消失时触发|-
