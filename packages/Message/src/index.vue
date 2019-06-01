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

<style lang="scss" scoped>
.ayu-message {
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 100;
  padding: 0 15px;
  box-sizing: border-box;
  border-radius: 5px;
  user-select: none;
  font-size: 20px;
  color: $color-info;
  border: 1px solid #dcdfe6;
  background-color: rgba($color-info, .2);
  transition: opacity 0.3s, transform .4s;
  p {
    font-size: 14px;
    color: $color-info;
    margin-left: 5px;
  }
}

.ayu-message--success {
  color: $color-success;
  background-color: rgba($color-success, .2);
  p {
    color: $color-success;
  }
}

.ayu-message--warning {
  color: $color-warning;
  background-color: rgba($color-warning, .2);
  p {
    color: $color-warning;
  }
}

.ayu-message--error {
  color: $color-danger;
  background-color: rgba($color-danger, .2);
  p {
    color: $color-danger;
  }
}

// 动画
.ayu-message-fade-enter,
.ayu-message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>


