<template>
  <div class="ayu-circle" :style="circleStyle">
    <svg :width="circleSize" :height="circleSize" :viewBox="`0 0 ${circleSize*2} ${circleSize*2}`">
      <path :d="pathString" stroke="#f3f3f3" :stroke-width="strokeWidth" fill-opacity="0"></path>
      <path :d="pathString" stroke-linecap="round" :stroke="themeStatusColor" :stroke-width="strokeWidth" fill-opacity="0" :style="pathStyle"></path>
    </svg>
    <div class="ayu-circle-content" :class="`ayu-circle-${status}`">
      <slot></slot>
    </div>
  </div>
</template>
<script>
// r：圆的半径
// cy：圆点的 y 坐标
// cx：圆点的 x 坐标
// viewBox: 画布缩放
// stroke：画笔颜色
// stroke-width：画笔宽度
// stroke-linecap：画笔结束方式，是圆形结束还是垂直结束
// stroke-dasharray：需要点数字，如果只设置一个值，则仅生成一条线的虚线，从而实现画直线
// stroke-dashoffset：定义虚线开始的地方，即虚线的位移。从而隐藏一部分虚线，实现显示弧线的效果。动画的原理也是利用该属性，控制隐藏的部分，实现进度条的增长
// fill：填充的图案或者颜色，由于这里直接使用画笔描绘图形，所以用不上，为了覆盖其默认值black，设置为none
export default {
  name: 'AyuCircle',
  props: {
    color: {
      type: String,
      default: '#3e8ef7'
    },
    percent: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 12
    },
    size: {
      type: Number,
      default: 120
    },
    status: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  computed: {
    themeStatusColor() {
      const obj = {
        'primary': '#3e8ef7',
        'success': '#11c26d',
        'info': '#0bb2d4',
        'warning': '#eb6709',
        'danger': '#ff4c52'
      };
      return obj[this.status] ? obj[this.status] : this.color;
    },
    circleStyle() {
      return {
        height: `${this.circleSize}px`
      };
    },
    circleSize() {
      return this.size + (this.strokeWidth / 2);
    },
    radius() {
      return this.circleSize - this.strokeWidth / 2;
    },
    pathString() {
      return `M ${this.circleSize},${this.circleSize} m 0,-${this.radius}
        a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
        a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`;
    },
    len() {
      return Math.PI * 2 * this.radius;
    },
    pathStyle() {
      return {
        'stroke-dasharray': `${this.len}px ${this.len}px`,
        'stroke-dashoffset': `${((100 - this.percent) / 100 * this.len)}px`,
        'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.ayu-circle {
  display: inline-block;
  position: relative;
  .ayu-circle-content {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    line-height: 1;
  }
  .ayu-circle-success {
    p {
      color: $color-success;
    }
    color: $color-success;
  }
  .ayu-circle-info {
    p {
      color: $color-info;
    }
    color: $color-info;
  }
  .ayu-circle-warning {
    p {
      color: $color-warning;
    }
    color: $color-warning;
  }
  .ayu-circle-danger {
    p {
      color: $color-danger;
    }
    color: $color-danger;
  }
}
</style>
