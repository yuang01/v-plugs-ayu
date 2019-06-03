<template>
  <div class="ayu-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AyuRadioGroup',
  props: {
    value: {},
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'value',
    event: 'select'
  },
  watch: {
    value(newValue) {
      // change事件
      this.$emit("change", newValue);
    }
  }
}
</script>

<style lang="scss" scoped>
.ayu-radio-group {
  display: flex;
  align-items: center;
}
</style>
