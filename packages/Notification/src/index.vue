<template>
<transition name="ayu-notification-fade">
  <div
    :class="['ayu-notification', horizontalClass, `ayu-notification--${type}`]"
    v-if="visible"
    :style="positionStyle"
  >
    <div class="ayu-notification-icon">
      <ayu-icon :icon-class="icon" v-if="type" />
    </div>
    <div class="ayu-notification__group">
      <h2 class="ayu-notification__title" v-text="title"></h2>
      <p class="ayu-notification__content" v-html="content"></p>
    </div>
    <ayu-icon icon-class="close" class="ayu-close-btn" v-if="showClose" @click.native.stop="handleClose()"></ayu-icon>
  </div>
</transition>
</template>

<script>
import box from '../../mixins/box.js';
let typeIconMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};
export default {
  name: 'AyuNotification',
  mixins: [box],
  props: {
    type: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'top-right'
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    duration: { 
      type: Number, 
      default: 4500 
    },
    autoClose: { 
      type: Boolean, 
      default: true 
    },
    showClose: { 
      type: Boolean, 
      default: true 
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      verticalOffset: 15,
      timer: null,
    }
  },
  computed: {
    horizontalClass() {
      return this.position.includes('right') ? 'right' : 'left';
    },
    icon() {
      return typeIconMap[this.type];
    },
    positionStyle() {
      return { top: `${this.verticalOffset + this.offset}px`};
    }
  },
  methods: {
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close();
          this.$emit('notifyClose');
        }, this.duration);
      }
    },
    stopTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    handleClose() {
      this.close();
      this.$emit('notifyClose');
    }
  },
  mounted() {
    if (this.autoClose) this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  }
}
</script>

<style lang="scss" scoped>
.ayu-notification {
  position: fixed;
  display: flex;
  justify-content: flex-start;
  padding: 15px 15px;
  border-radius: 10px;
  width: $notification-width;
  min-height: $notification-height;
  box-sizing: border-box;
  user-select: none;
  z-index: 100;
  background-color: #fff;
  border: 1px solid $color-border;
  box-shadow: $notification-shadow;
  transition: opacity .3s, transform .3s, left .3s, right .3s, top 0.4s, bottom .3s;

  .ayu-notification-icon {
    font-size: 22px;
    margin-right: 5px;
  }
  .ayu-notification__group {
    .ayu-notification__title {
      margin: 0;
      font-weight: 700;
      font-size: 16px;
      color: #303133;
    }
    .ayu-notification__content {
      font-size: 14px;
      line-height: 21px;
      margin: 6px 0 0;
      color: #606266;
      text-align: justify;
    }
  }
  .ayu-close-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 16px;
    cursor: pointer;
  }
}

.ayu-notification--info {
  .ayu-notification-icon {
    color: $color-info;
  }
}

.ayu-notification--success {
  .ayu-notification-icon {
    color: $color-success;
  }
}

.ayu-notification--warning {
  .ayu-notification-icon {
    color: $color-warning;
  }
}

.ayu-notification--error {
  .ayu-notification-icon {
    color: $color-danger;
  }
}

.right {
  right: $notification-offset;
}
.left {
  left: $notification-offset;
}

.ayu-notification-fade-enter {
  &.right {
    right: 0;
    transform: translateX(100%);
  }

  &.left {
    left: 0;
    transform: translateX(-100%);
  }
}

.ayu-notification-fade-leave-active {
  opacity: 0;
}
</style>

