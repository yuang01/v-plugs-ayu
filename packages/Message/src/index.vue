<template>
  <transition name="ayu-message-fade">
    <div 
      :class="['ayu-message', `ayu-message--${type}`]" 
      :style="positionStyle"
      v-if="visible"
    >
      <ayu-icon :icon-class="icon" />
      <p class="ayu-message-content" v-html="content"></p>
    </div>
  </transition>
</template>

<script>
import box from '../../mixins/box.js';
export default {
  name: 'AyuMessage',
  mixins: [box],
  props: {
    type: {
      type: String,
      default: 'info'
    },
    verticalOffset: {
      type: Number,
      default: 30
    },
    content: {
      type: String,
      default: ''
    },
    duration: { 
      type: Number, 
      default: 3000 
    },
  },
  data() {
    return {
      iconMap: {
        success: 'success',
        warning: 'warning',
        info: 'info',
        error: 'error'
      },
      timer: null
    }
  },
  computed: {
    positionStyle() {
      return { top: `${this.verticalOffset}px` };
    },
    icon() {
      return this.iconMap[this.type];
    }
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  },
  methods: {
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close();
          this.$emit('messageClose');
        }, this.duration);
      }
    },
    stopTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  }
}
</script>
