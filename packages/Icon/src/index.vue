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
