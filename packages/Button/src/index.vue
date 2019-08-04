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
    ]"
    @click="event => !disabled && $emit('click', event)">
    <ayu-icon iconClass="loading" spin v-if="loading"></ayu-icon>
    <ayu-icon :iconClass="icon" v-if="icon && !loading"></ayu-icon>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'ayuButton',
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
