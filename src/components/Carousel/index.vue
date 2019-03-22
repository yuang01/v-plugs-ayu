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
        @click.stop="prev()">&lt;</button>
    </transition>
    <transition name="carousel-arrow-right">
      <button
        v-if="arrow !== 'never'" 
        v-show="arrow === 'always' || hover && activeIndex >= 0" 
        type="button" class="ayu-carousel_arrow ayu-carousel_arrow--right" 
        @click.stop="next()">&gt;</button>
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
    }, 500),
    next: _.throttle(function () {
      let index = this.activeIndex + 1;
      this.resetTrantionType(index, this.activeIndex);
      if (index === this.items.length) {
        index = 0;
      }
      this.activeIndex = index;
    }, 500),
    handleIndicatorClick(index) {
      this.resetTrantionType(index, this.activeIndex);
      this.activeIndex = index;
    },
    resetTrantionType(val, oldVal) {
      if (this.type === '') return;
      this.slideType = this.type === 'slide' ? val < oldVal ? 'right' : 'left' : 'fade';
      this.items.forEach(item => {
        item.translateSlideType(this.slideType);
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

<style lang="scss" scoped>
.ayu-carousel {
  width: 100%;
  overflow-x: hidden;
  position: relative;
  // 箭头
  .ayu-carousel_arrow {
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    text-align: center;
    font-size: 12px;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    height: 36px;
    width: 36px;
    cursor: pointer;
    transition: .3s;
    border-radius: 50%;
    background-color: rgba(31,45,61,.11);
    color: #fff;
    &:hover {
      background-color: rgba(31,45,61,.3);
    }
  }
  .ayu-carousel_arrow--left {
    left: 16px;
  }
  .ayu-carousel_arrow--right {
    right: 16px;
  }
  // 底部点
  .ayu-carousel_indicators {
    position: absolute;
    list-style: none;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    padding: 0;
    z-index: 2;
    .ayu-carousel_indicator {
      display: inline-block;
      padding: 14px 4px;
      cursor: pointer;
      background-color: transparent;
      .ayu-carousel_botton {
        display: block;
        opacity: .48;
        width: 30px;
        height: 2px;
        background-color: #fff;
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        transition: .3s;
      }
      &.is-active {
        .ayu-carousel_botton {
          opacity: 1;
        }
      }
    }
  }
  // 动画
  .carousel-arrow-left-enter {
    transform: translate(-200%, -50%);
  }
  .carousel-arrow-left-enter-active,
  .carousel-arrow-left-leave-active,
  .carousel-arrow-right-enter-active,
  .carousel-arrow-right-leave-active, {
    transition: .3s;
  }
  .carousel-arrow-left-leave-active {
    transform: translate(-200%, -50%);
  }
  .carousel-arrow-right-enter {
    transform: translate(200%, -50%);
  }
  .carousel-arrow-right-leave-active {
    transform: translate(200%, -50%);
  }
}
</style>
