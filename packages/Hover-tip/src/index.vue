<template>
  <div class="ayu-hover-tip" :class="{'disabled': disabled}" @mouseenter="hoverEnter()" @mouseleave="hoverLeave()">
    <div class="ayu-hover-tip_part">
      <slot name="hover-part">
        <ayu-icon icon-class="question" style="font-size: 18px;"/>
      </slot>
    </div>
    <transition :name="transition">
      <div class="ayu-hover-tip_tip" :class="[placement, theme]" v-if="isShow">
        <!-- 用户要提示的部分 -->
        <slot name="tip-part"></slot>
        <!-- 箭头 -->
        <div class="tip_arrow"></div>
        <!-- 遮挡箭头在div里面部分 -->
        <div class="tip_block"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AyuHoverTip',
  props: {
    placement: {
      type: String,
      default: 'top-center' // left/right/top/bottom
    },
    disabled: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'fade-in-linear' // custom
    },
    theme: {
      type: String,
      default: 'light' // dark
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    hoverEnter() {
      this.isShow = true;
    },
    hoverLeave() {
      this.isShow = false;
    }
  },
}
</script>
