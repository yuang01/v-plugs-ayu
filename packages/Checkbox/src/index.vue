<template>
  <label
    :class="[
        'ayu-checkbox',
        { 'is-checked': isChecked },
        { 'is-disabled': isDisabled }
    ]"
    @click.stop.prevent="handleClick"
  >
    <span class="ayu-checkbox_inner">
      <ayu-icon icon-class="check" v-if="isChecked" class="ayu-checkbox_inner-icon"/>
    </span>

    <input
      class="ayu-checkbox__original"
      type="checkbox"
      v-bind="$attrs"
      :value="model"
      :name="name"
      aria-hidden="true"
      :disabled="isDisabled"
    >
    <span class="ayu-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'AyuCheckbox',
  props: {
    value: {},
    label: {},
    disabled: {
      type: Boolean,
      default: false,
    },
    // 原生name属性
    name: String
  },
  model: {
    prop: "value",
    event: "select"
  },
  computed: {
    isGroup() {
      return this.$parent.$options.name === 'AyuCheckboxGroup';
    },
    isDisabled() {
      return this.$parent.disabled || this.disabled;
    },
    isChecked() {
      if (!this.isGroup) {
        return this.model;
      }

      return this.$parent.value.some(item => item === this.label);
    },
    model: {
      get() {
        return this.isGroup ? this.$parent.value : this.value;
      },
      set(newval) {
        if (this.isGroup) {
          this.isChecked ? this.$parent.deleteItem(newval) : this.$parent.selectItem(newval);
        } else {
          this.$emit("select", newval);
        }
      }
    }
  },
  methods: {
    handleClick() {
      if (!this.isDisabled) {
         this.model = this.isGroup ? this.label : !this.model;
      }
    }
  }
}
</script>
