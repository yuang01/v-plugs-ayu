## Notification 提示
悬浮出现在页面角落，显示全局的通知提醒消息。
### 基本用法
适用性广泛的通知栏
<style scoped>
.ayu-button {
  margin-right: 5px;
}
</style>
::: demo Notification 组件提供通知功能，Ayu 注册了`$notify`方法，接收一个`options`字面量参数，在最简单的情况下，你可以设置`title`字段和`content`字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置`duration`或者`autoClose`，可以控制关闭的时间间隔，特别的是，如果`duration`设置为`0`，或者`autoClose`设置为`false`则不会自动关闭。注意：`duration`接收一个`Number`，单位为毫秒，默认为`4500`。
``` html
<ayu-button @click="open()">可自动关闭</ayu-button>
<ayu-button @click="open1()">不会自动关闭</ayu-button>
<ayu-button @click="open2()">不会自动关闭</ayu-button>
<script>
export default {
  methods: {
    open() {
      this.$notify({
        title: '我是标题',
        content: '你们好啊！哈哈哈哈'
      })
    },
    open1() {
      this.$notify({
        title: '我是标题',
        content: '你们好啊！哈哈哈哈',
        duration: 0
      })
    },
    open2() {
      this.$notify({
        title: '我是标题',
        content: '你们好啊！哈哈哈哈',
        autoClose: false
      })
    },
    open3() {
        this.$notify({
          title: '成功',
          content: '这是一条成功的提示消息',
          type: 'success'
        })
      },
    open4() {
      this.$notify({
        title: '警告',
        content: '这是一条警告的提示消息',
        type: 'warning'
      })
    },
    open5() {
      this.$notify({
        title: '消息',
        content: '这是一条消息的提示消息',
        type: 'info'
      })
    },
    open6() {
      this.$notify({
        title: '错误',
        content: '这是一条错误的提示消息',
        type: 'error'
      })
    },
    open7() {
      this.$notify({
        title: '标题',
        content: '只是一个标题',
        position: 'top-left'
      })
    },
    open8() {
      this.$notify({
        title: '标题',
        content: '只是一个标题',
        position: 'top-right'
      })
    },
    open9() {
      this.$notify({
        title: '标题',
        content: '我是内容',
        offset: 100
      })
    },
    open10() {
      this.$notify({
        title: 'HTML字段',
        content: '<strong>这是 <i>HTML</i> 片段</strong>'
      })
    }
  }
}
</script>
```
:::

### 带有倾向性
带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息
::: demo
``` html
<ayu-button @click="open3()">成功</ayu-button>
<ayu-button @click="open4()">警告</ayu-button>
<ayu-button @click="open5()">消息</ayu-button>
<ayu-button @click="open6()">错误</ayu-button>
<script>
  export default {
    methods: {
      open3() {
        this.$notify({
          title: '成功',
          content: '这是一条成功的提示消息',
          type: 'success'
        })
      },
      open4() {
        this.$notify({
          title: '警告',
          content: '这是一条警告的提示消息',
          type: 'warning'
        })
      },
      open5() {
        this.$notify({
          title: '消息',
          content: '这是一条消息的提示消息',
          type: 'info'
        })
      },
      open6() {
        this.$notify({
          title: '错误',
          content: '这是一条错误的提示消息',
          type: 'error'
        })
      }
    }
  }
</script>
```
:::

### 自定义弹出位置
支持左上角和右上角弹出
::: demo 使用`position`属性定义 Notification 的弹出位置，支持两个选项：`top-right`、`top-left`默认为`top-right`。
``` html
<ayu-button @click="open7()">左上</ayu-button>
<ayu-button @click="open8()">右上</ayu-button>

<script>
  export default {
    methods: {
      open7() {
        this.$notify({
          title: '标题',
          content: '只是一个标题',
          position: 'top-left'
        })
      },
      open8() {
        this.$notify({
          title: '标题',
          content: '只是一个标题',
          position: 'top-right'
        })
      }
    }
  }
</script>
```
:::

### 带有偏移
让 Notification 偏移一些位置
::: demo Notification 提供设置偏移量的功能，通过设置 offset 字段，可以使弹出的消息垂直方向向下偏移。
``` html
<ayu-button @click="open9()">偏移的消息</ayu-button>

<script>
export default {
  open9() {
    this.$notify({
      title: '标题',
      content: '我是内容',
      offset: 100
    })
  }
}
</script>
```
:::

### 使用HTML片段
content 属性支持传入 HTML 片段
::: demo
``` html
<ayu-button @click="open10()">使用HTML片段</ayu-button>
<script>
  export default {
    methods: {
      open10() {
        this.$notify({
          title: 'HTML字段',
          content: '<strong>这是 <i>HTML</i> 片段</strong>'
        })
      }
    }
  }
</script>
```
:::
> content 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。因此请确保 content 的内容是可信的，永远不要将用户提交的内容赋值给 content 属性。

### Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|type|不同状态|String|success/info/warning/error/|-
|position|自定义弹出位置|String|top-left/top-right|top-right
|showClose|是否显示关闭按钮|Boolean|true/false|true
|duration|显示时间, 毫秒。设为 0 则不会自动关闭|Number|-|4500
|autoClose|是否自动关闭|Boolean|true/false|true
|offset|向下偏移量|Number|-|0
|title|标题|String|-|-
|content|说明文字|String|-|-

### Events
事件名称|说明|回调参数
:---|:---|:---
onClose|在弹出框消失时触发|(event: Event)
