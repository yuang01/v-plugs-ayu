<template>
  <svg class="ayu-icon" aria-hidden="true" :class="{'is-spin': spin}">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'AyuIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    spin: { // 旋转
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style>
.ayu-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-weight: 400;
}
.is-spin {
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(1turn);
  }
}
</style>
