## MessageBox 弹框
模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。
<script>
export default {
  methods: {
    open() {
      this.$alert({
        title: '我是标题',
        content: '我是内容',
        onConfirm: () => {
          alert('你点了确定哦');
        }
      })
    },
    open2() {
      this.$confirm({
        title: '我是标题',
        content: '我是内容',
        onConfirm: () => {
          alert('你点了确定');
        },
        onCancel: () => {
          alert('取消了哦');
        },
        onClose: () => {
          alert('关闭了呢');
        }
      })
    }
  }
}
</script>
### 消息提示
:::demo
``` html
<ayu-button @click="open()" type="primary">打开弹框</ayu-button>
<script>
export default {
  methods: {
    open() {
      this.$alert({
        title: '我是标题',
        content: '我是内容',
        onConfirm: () => {
          alert('你点了确定哦');
        }
      })
    },
  }
}
</script>
```
:::

### 确认消息
:::demo
``` html
<ayu-button @click="open2()" type="primary">打开弹框</ayu-button>
<script>
export default {
  methods: {
    open2() {
      this.$confirm({
        title: '我是标题',
        content: '我是内容',
        onConfirm: () => {
          alert('你点了确定');
        },
        onCancel: () => {
          alert('取消了哦');
        },
        onClose: () => {
          alert('关闭了呢');
        }
      })
    }
  }
}
</script>
```
:::

### Attributes
参数|说明|类型|可选值|默认值
:---|:---|:---|:---|:---
title|标题|String|-|'标题'
content|内容|String|-|'一段内容'
confirmButtonText|确认按钮的文字|String|-|'确定'
cancelButtonText|取消按钮的文字|String|-|'取消'
showCloseBtn|是否显示关闭按钮|Boolean|true/false|true

### Events
事件名称|说明|回调参数|-|-
:---|:---|:---|:---|:---
onConfirm|点击确定触发该事件|-|-
onCancel|点击取消触发该事件|-|-
onConfirm|点击关闭触发该事件|-|-
