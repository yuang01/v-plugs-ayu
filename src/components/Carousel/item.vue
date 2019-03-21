<template>
<transition :name="slideType">
  <div class="ayu-carousel_item" 
  v-show="activeIndex === index">
    <slot></slot>
  </div>
</transition>
</template>

<script>
export default {
  name: 'AyuCarouselItem',
  data() {
    return {
      index: -1,
      activeIndex: 0,
      slideType: ''
    }
  },
  methods: {
    translateItem(activeIndex) {
      this.activeIndex = activeIndex;
    },
    translateSlideType(slideType) {
      this.slideType = slideType;
    }
  },
  created() {
    this.$parent && this.$parent.updateItems();
  },
  mounted() {
    this.$nextTick(() => {
      const parent = this.$parent;
      this.index = parent.items.indexOf(this);
      this.activeIndex = parent.activeIndex;
      this.slideType = parent.slideType;
    })
  },
  destroyed() {
    this.$parent && this.$parent.updateItems();
  }
}
</script>

<style lang="scss" scoped>
  .ayu-carousel_item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // display: inline-block;
    overflow: hidden;
    z-index: 0;
  }
  // 动画
  .left-enter-active {
    transform:translateX(0);
    transition:all .5s ease;
  }
  .left-leave-active {
    transform:translateX(-100%);
    transition:all .5s ease
  }
  .left-enter {
    transform:translateX(100%);
  }
  .left-leave {
    transform:translateX(0);
  }
  .right-enter-active {
    transform: translate3d(0%);
    transition: all .5s ease;
  }
  .right-leave-active {
    transform: translateX(100%);
    transition: all .5s ease;
  }
  .right-enter {
    transform: translateX(-100%);
  }
  .right-leave {
    transform: translateX(0);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

