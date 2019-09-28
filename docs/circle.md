
# Circle 环形进度条
用于展示操作进度，告知用户当前状态和预期。

### 基本调用
::: demo 预制了五种颜色，通过`status`来定义, 分别是`primary`(默认)、 `success`、 `info`、`warning`、`danger`
``` html
<ayu-circle :percent="40"><span>项目1</span></ayu-circle>
<ayu-circle :percent="40" status="success"><span>项目2</span></ayu-circle>
<ayu-circle :percent="40" status="info"><span>项目3</span></ayu-circle>
<ayu-circle :percent="40" status="warning"><span>项目4</span></ayu-circle>
<ayu-circle :percent="40" status="danger"><span>项目5</span></ayu-circle>

```
:::

### 自定义颜色
::: demo 用过`color`定义颜色
``` html
<ayu-circle :percent="40" color="#12e9e9"><span>项目1</span></ayu-circle>
<ayu-circle :percent="40" color="skyblue"><span>项目1</span></ayu-circle>

```
:::

### 组合使用
::: demo
``` html
<ayu-button icon="minus" @click="decrease"></ayu-button>
<ayu-button icon="plus" @click="increase"></ayu-button>

<ayu-circle :percent="percent"><span>{{percent}}%</span></ayu-circle>

<script>
  export default {
    data() {
      return {
        percent: 20
      };
    },
    methods: {
      increase() {
        this.percent += 10;
        if (this.percent > 100) {
          this.percent = 100;
        }
      },
      decrease() {
        this.percent -= 10;
        if (this.percent < 0) {
          this.percent = 0;
        }
      }
    }
  }
</script>
```
:::
<style scoped>
.ayu-circle {
  margin-right: 5px;
}
</style>
### Attributes
|参数|说明|类型|可选值|默认值
|:---|:---|:---|:---|:---
|color|自定义颜色|String|-|'#3e8ef7'
|status|预制状态|String|primary/success/info/warning/danger 优先级大于color|'primary'
|percent|显示颜色|Number|-|-
|stroke-width|画笔宽度|Number|-|12
|size|大小|Number|-|120
