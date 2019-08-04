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
    translateSlideType(val, oldVal, type) {
      this.slideType = type === 'slide' ? val < oldVal ? 'right' : 'left' : 'fade';
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
