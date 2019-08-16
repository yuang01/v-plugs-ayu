<template>
  <label
    class="ayu-radio"
    :class="{
      'is-checked': label === model, 
      'is-disabled': isDisabled}"
    @click.stop.prevent="handleClick"
  >
    <span class="ayu-radio_inner"></span>
    <input 
      class="ayu-radio__original"
      :value="model"
      :name="name"
      type="radio"
      aria-hidden="true"
      v-bind="$attrs"
      :disabled="isDisabled"
    >
    <span class="ayu-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'AyuRadio',
  props: {
    // v-model
    value: {},
    // :label="xx"
    label: {},
    disabled: {
      type: Boolean,
      default: false,
    },
    // 原生name属性
    name: String
  },
  // 双向绑定，改变v-model的值， 当select的时候触发
  model: {
    prop: 'value',
    event: 'select'
  },
  computed: {
    // 是否被<ayu-radio-group>包裹着
    isGroup() {
      return this.$parent.$options.name === 'AyuRadioGroup';
    },
    isDisabled() {
      return this.$parent.disabled || this.disabled;
    },
    model: {
      get() {
        return this.isGroup ? this.$parent.value : this.value;
      },
      set(newval) {
        this.isGroup ? this.$parent.$emit('select', newval) : this.$emit('select', newval);
      }
    },
  },
  methods: {
    handleClick() {
      !this.isDisabled && (this.model = this.label);
    }
  },
}
</script>
