<template>
  <div class="ayu-carousel" :style="{height}" 
  @mouseenter.stop="handleMouseEnter" 
  @mouseleave.stop="handleMouseLeave">
    <slot></slot>
    <transition name="carousel-arrow-left">
      <button 
        v-if="arrow !== 'never'" 
        v-show="arrow === 'always' || hover && activeIndex >= 0" 
        type="button"
        class="ayu-carousel_arrow ayu-carousel_arrow--left" 
        @click.stop="prev()"><ayu-icon icon-class="left"></ayu-icon></button>
    </transition>
    <transition name="carousel-arrow-right">
      <button
        v-if="arrow !== 'never'" 
        v-show="arrow === 'always' || hover && activeIndex >= 0" 
        type="button" class="ayu-carousel_arrow ayu-carousel_arrow--right" 
        @click.stop="next()"><ayu-icon icon-class="right"></ayu-icon></button>
    </transition>
    <ul class="ayu-carousel_indicators">
      <li class="ayu-carousel_indicator"
      v-for="(item, index) in items" :key="index"
      :class="{'is-active': index === activeIndex}"
      @click.stop="handleIndicatorClick(index)">
        <button class="ayu-carousel_botton"></button>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'AyuCarousel',
  props: {
    height: {
      type: String,
      default: '0px'
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    type: {
      type: String,
      default: ''
    },
    arrow: {
      type: String,
      default: 'hover'
    },
  },
  data() {
    return {
      items: [],
      activeIndex: 0,
      timer: null,
      slideType: '',
      hover: false
    }
  },
  watch: {
    activeIndex(val, oldVal) {
      this.resetItemShow();
      this.$emit('change', val, oldVal);
    },
    autoplay(val) {
      val ? this.startTimer() : this.pauseTimer();
    },
    items(val) {
      if (val.length > 0) this.setActiveItem(this.initialIndex);
    }
  },
  methods: {
    prev: _.throttle(function () {
      let index = this.activeIndex - 1;
      this.resetTrantionType(index, this.activeIndex); // 通过值的变化来改变动画效果
      if (index === -1) {
        index = this.items.length - 1;
      }
      this.activeIndex = index;
    }, 300),
    next: _.throttle(function () {
      let index = this.activeIndex + 1;
      this.resetTrantionType(index, this.activeIndex);
      if (index === this.items.length) {
        index = 0;
      }
      this.activeIndex = index;
    }, 300),
    handleIndicatorClick(index) {
      this.resetTrantionType(index, this.activeIndex);
      this.activeIndex = index;
    },
    resetTrantionType(val, oldVal) {
      if (this.type === '') return;
      this.items.forEach(item => {
        item.translateSlideType(val, oldVal, this.type);
      });
    },
    resetItemShow() {
      this.items.forEach(item => {
        item.translateItem(this.activeIndex);
      });
    },
    playSlides() {
      this.next();
    },
    startTimer() {
      if (this.interval <= 0 || !this.autoplay) return;
      this.timer = setInterval(this.playSlides, this.interval);
    },
    pauseTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    handleMouseEnter() {
      this.hover = true;
      this.pauseTimer();
    },
    handleMouseLeave() {
      this.hover = false;
      this.startTimer();
    },
    setActiveItem(index) {
      this.activeIndex = index;
    },
    updateItems() {
      this.items = this.$children.filter(child => child.$options.name === 'AyuCarouselItem');
    }
  },
  mounted() {
    this.updateItems();
    this.$nextTick(() => {
      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        this.activeIndex = this.initialIndex;
      }
      this.startTimer();
    });
  }
}
</script>
