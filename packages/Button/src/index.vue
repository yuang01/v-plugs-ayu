<template>
  <button
    class="ayu-button"
    :class="[
      `ayu-button-${size}`, 
      `ayu-button-${type}`, 
      {
        'is-round': round, 
        'is-disabled': disabled,
        'is-circle': circle,
        'is-outline': outline,
      }
    ]">
    <ayu-icon iconClass="loading" spin v-if="loading"></ayu-icon>
    <ayu-icon :iconClass="icon" v-if="icon && !loading"></ayu-icon>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
// import ayuIcon from '@/components/Icon';
export default {
  name: 'ayuButton',
  components: {
    // ayuIcon
  },
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: Boolean
  }
}
</script>

<style lang="scss" scoped>
.ayu-button {
  display: inline-flex;
  font-weight: 300;
  text-align: center;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  color: #76838f;
  background-color: transparent;
  border-color: #e4eaec;
  transition: all .15s;
  .ayu-icon+span {
    margin-left: 5px;
  }
  &:hover {
    background-color: rgba(118,131,143,.1);
  }
  &:active {
    color: #76838f;
    background-color: rgba(118,131,143,.3);
    border-color: #e4eaec;
  }
  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &.ayu-button-large {
    padding: 12px 20px;
    font-size: 14px;
  }
  &.ayu-button-medium {
    padding: 10px 20px;
    font-size: 14px;
  }
  &.ayu-button-small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  &.ayu-button-mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  @mixin type($color, $bgc-color, $hover-color, $active-color) {
    color: $color;
    background-color: $bgc-color;
    border-color: $bgc-color;
    &:hover {
      background-color: $hover-color;
    }
    &:active {
      background-color: $active-color;
    }
    &.is-disabled {
      &:hover,
      &:active {
        background-color: $bgc-color;
      }
    }
  }
  &.ayu-button-primary {
    @include type(#f7f7f7, #3e8ef7, #589ffc, #247cf0);
  }
  &.ayu-button-success {
    @include type(#f7f7f7, #11c26d, #28d17c, #05a85c);
  }
  &.ayu-button-info {
    @include type(#f7f7f7, #0bb2d4, #28c0de, #0099b8);
  }
  &.ayu-button-warning {
    @include type(#f7f7f7, #eb6709, #f57d1b, #e79857);
  }
  &.ayu-button-danger {
    @include type(#f7f7f7, #ff4c52, #ff666b, #f2353c);
  }
  @mixin outlineType($bgc, $border-color, $hover-color, $active-color) {
    background-color: $bgc;
    color: $border-color;
    border-color: $border-color;
    &:hover {
      background-color: $border-color;
      color: $hover-color;
    }
    &:active {
      background-color: $active-color;
    }
  }
  &.is-outline {
    &.ayu-button-primary {
      @include outlineType(transparent, #3e8ef7, #f7f7f7, #0099b8);
    }
    &.ayu-button-success {
       @include outlineType(transparent, #11c26d, #f7f7f7, #05a85c);
    }
    &.ayu-button-info {
       @include outlineType(transparent, #0bb2d4, #f7f7f7, #0099b8);
    }
    &.ayu-button-warning {
       @include outlineType(transparent, #eb6709, #f7f7f7, #e79857);
    }
    &.ayu-button-danger {
       @include outlineType(transparent, #ff4c52, #f7f7f7, #f2353c);
    }
  }
}
</style>
