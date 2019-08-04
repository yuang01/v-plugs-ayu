<template>
  <div id="app">
    <router-view></router-view>
    <div class="my-special-button" v-if="isShow" @mouseover="show" @mouseout="hide">
      <div class="my-special-button__content">
        在线讨论<ayu-icon icon-class="tickets" class="blink"></ayu-icon>
      </div>
      <ayu-icon v-if="showClose" icon-class="close" class="close" @click.stop.native="close"></ayu-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      showClose: false,
    }
  },
  methods: {
    close() {
      this.isShow = false;
    },
    show() {
      this.showClose = true;
    },
    hide() {
      this.showClose = false;
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import './style/variable.scss';
.my-special-button {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: $color-primary;
  padding: 10px;
  color: #fff;
  user-select: none;
  cursor: pointer;
  .my-special-button__content {
    width: 20px;
    font-size: 20px;
    word-wrap: break-word;
    .blink {
      animation: blink 1s linear infinite;  
      /* 其它浏览器兼容性前缀 */
      -webkit-animation: blink 1s linear infinite;
      -moz-animation: blink 1s linear infinite;
      -ms-animation: blink 1s linear infinite;
      -o-animation: blink 1s linear infinite;
    }
  }
  .close {
    position: absolute;
    top: -12px;
    right: 2px;
    font-size: 12px;
    color: $color-primary;
  }
}

// 文字闪烁
/* 定义keyframe动画，命名为blink */
@keyframes blink{
  0%{opacity: 1;}
  100%{opacity: 0;} 
}
/* 添加兼容性前缀 */
@-webkit-keyframes blink {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
@-moz-keyframes blink {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
@-ms-keyframes blink {
  0% {opacity: 1; } 
  100% { opacity: 0;}
}
@-o-keyframes blink {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
