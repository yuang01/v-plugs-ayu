<template>
  <div class="ayu-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AyuCheckboxGroup',
  props: {
    value: {},
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  model: {
    prop: "value",
    event: "select"
  },
  watch: {
    value(newval) {
      // 向父级传递change事件
      this.$emit('change', newval);
    }
  },
  methods: {
    selectItem(item) {
      const { value } = this;
      // 将选中的值和原有的值组合成一个新数组
      this.$emit('select', [...value, item]);
    },
    // 将value重新赋值，过滤掉不为当前点击的选项的值
    deleteItem(item) {
      this.$emit('select', this.value.filter(selectItem => selectItem !== item));
    }
  }
}
</script>

<style lang="scss" scoped>
.ayu-checkbox-group {
  display: flex;
  align-items: center;
}
</style>
