<template>
  <label
    class="ayu-radio"
    :class="{
      'is-checked': label === model, 
      'is-disabled': isDisabled}"
    @click.stop="handleClick"
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

<style lang="scss" scoped>
.ayu-radio {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  user-select: none;
  line-height: 1;
  color: #606266;
  font-weight: 500;
  cursor: pointer;
  margin-right: 30px;
  $radio-space: 8px;
  $radio-size: 14px;
  // 作用：原点和右边文字的间隔和选中的时候，激活原点的颜色（primary）
  .ayu-radio_inner {
    margin-right: $radio-space;
    display: inline-block;
    width: $radio-size;
    height: $radio-size;
    border: 1px solid #ccc;
    border-radius: 50%;
    box-sizing: border-box;
    transition: all 0.3s;
  }
  .ayu-radio__label {
    font-size: $radio-size;
  }
  // 隐藏input（type=“radio"）
  .ayu-radio__original {
    display: none;
  }
}
// 选中状态
.is-checked {
  .ayu-radio_inner {
    border: 5px solid $color-primary;
  }
  .ayu-radio__label {
    color: $color-primary;
  }
}
// 禁用状态
.is-disabled {
  &.is-checked {
    .ayu-radio_inner {
      border: 5px solid $color-disabled;
    }
  }
  .ayu-radio_inner {
    background-color: #f5f7fa;
  }
  .ayu-radio__label {
    color: $color-disabled;
  }
}
</style>
