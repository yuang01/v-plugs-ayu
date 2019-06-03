<template>
  <label
    :class="[
        'ayu-checkbox',
        { 'is-checked': isChecked },
        { 'is-disabled': isDisabled }
    ]"
    @click.stop="handleClick"
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

<style lang="scss" scoped>
.ayu-checkbox {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  user-select: none;
  line-height: 1;
  color: #606266;
  font-weight: 500;
  cursor: pointer;
  margin-right: 30px;
  $checkbox-space: 8px;
  $checkbox-size: 14px;
  // 作用：原点和右边文字的间隔和选中的时候，激活原点的颜色（primary）
  .ayu-checkbox_inner {
    margin-right: $checkbox-space;
    display: inline-flex;
    width: $checkbox-size;
    height: $checkbox-size;
    border: 1px solid #ccc;
    box-sizing: border-box;
    transition: all 0.3s;
    justify-content: center;
    align-items: center;
    .ayu-checkbox_inner-icon {
      font-size: 12px;
      margin: 0 2px;
      color: #fff;
      font-weight: 500;
    }
  }
  .ayu-radio__label {
    font-size: $checkbox-size;
    transition: all 0.3s;
  }
  .ayu-checkbox__original {
    display: none;
  }
}
.is-checked {
  .ayu-checkbox_inner {
    background-color: $color-primary;
    color: azure;
    border: $color-primary;
  }
  .ayu-radio__label {
    color: $color-primary;
  }
}
.is-disabled {
  .ayu-checkbox_inner {
    background-color: #f5f7fa;
    border: $color-disabled;
  }
  &.is-checked {
    .ayu-checkbox_inner {
      .ayu-checkbox_inner-icon {
        color: #ccc;
      }
    }
  }
  .ayu-radio__label {
    color: $color-disabled;
  }
}
</style>

