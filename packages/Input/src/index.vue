<template>
  <div 
    :class="[
      type === 'textarea' ? 'ayu-textarea' : 'ayu-input',
      size ? 'ayu-input--' + size : '',
      {'round': round},
      {
        'prefix-icon': prefixIcon || this.$slots.prefix,
        'suffix-icon': suffixIcon || this.$slots.suffix,
        'clear-icon': clearable
      },
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <textarea 
      v-if="type === 'textarea'"
      :value="inputValue"
      class="ayu-textarea__inner"
      v-bind="$attrs"
      v-on="inputListeners"
    />
    <template v-else>
      <span v-if="prefixIcon || this.$slots.prefix" class="input-icon">
        <ayu-icon v-if="prefixIcon" :icon-class="prefixIcon"></ayu-icon>
        <slot name="prefix"></slot>
      </span>
      <div v-if="havePrepend" class="ayu-input__prepand">
        <slot name="prepend"></slot>
      </div>
      <input 
        class="ayu-input__inner"
        :type="type"
        :value="inputValue"
        v-bind="$attrs"
        v-on="inputListeners"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <div v-if="haveAppend" class="ayu-input__append">
        <slot name="append"></slot>
      </div>
      <ayu-icon v-if="showClear" icon-class="circle-close" class="input-icon ayu-input__clear" @click.native="clear()"/>
      <span v-if="suffixIcon || this.$slots.suffix" class="input-icon">
        <slot name="suffix"></slot>
        <ayu-icon v-if="suffixIcon" :icon-class="suffixIcon"></ayu-icon>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AyuInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    prefixIcon: {
      type: String
    },
    suffixIcon: {
      type: String
    },
    round: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputValue: '',
      hovering: false,
      focused: false
    }
  },
  computed: {
    // https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6
    inputListeners() {
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: event => {
            this.$emit('input', event.target.value)
          }
        }
      )
    },
    havePrepend() {
      return this.$slots.prepend;
    },
    haveAppend() {
      return this.$slots.append; 
    },
    showClear() {
      return this.clearable && this.inputValue && (this.hovering || this.focused);
    }
  },
  watch: {
    value: {
      handler(val) {
        this.inputValue = val;
      },
      // 代表在wacth里声明了value这个方法之后立即先去执行handler方法
      immediate: true
    }
  },
  methods: {
    handleFocus() {
      this.focused = true;
    },
    handleBlur() {
      this.focused = false;
    },
    clear() {
      this.inputValue = '';
      this.$emit('input', this.inputValue);
    }
  }
}
</script>

<style lang="scss" scoped>
.ayu-textarea,
.ayu-input {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

@mixin base {
  display: inline-block;
  width: 100%;
  padding: 0 15px;
  line-height: 36px;
  outline: none;
  font-size: inherit;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  outline: none;
  &:focus {
    outline: none;
    border: 1px solid $color-primary;
  }
  &:disabled {
    background-color: rgba($color-disabled, 0.25);
    color: $color-disabled;
    cursor: not-allowed;
  }
  &::placeholder {
    color: $color-disabled;
  }
}

@mixin round {
  &.round {
    .ayu-input__inner {
      border-radius: 200px;
    }
  }
}
// textarea
.ayu-textarea {
  .ayu-textarea__inner {
    @include base;
    min-height: 2.5em;
    line-height: 36px;
  }
}
// input
.ayu-input {
  font-size: 14px;
  .ayu-input__inner {
    @include base;
  }
  // round props
  @include round;
  // icon
  .input-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto auto;
    height: 36px;
    line-height: 36px;
    color: $color-disabled;
  }
  // icon --> prefix and suffix props
  &.prefix-icon {
    .ayu-input__inner {
      padding-left: 24px;
    }
    .input-icon:first-child {
      left: 6px;
    }
  }
  &.suffix-icon {
    .ayu-input__inner {
      padding-right: 24px;
    }
    .input-icon:last-child {
      right: 6px;
    }
  }
  // clear
  &.clear-icon {
    .ayu-input__inner {
      padding-right: 28px;
    }
    .ayu-input__clear {
      right: 10px;
      z-index: 1;
      &:hover {
        cursor: pointer;
      }
    }
  }
  // slot --> prepand append props
  .ayu-input__prepand,
  .ayu-input__append {
    padding: 0 20px;
    line-height: 36px;
    font-size: inherit;
    border: 1px solid #dcdfe6;
    background-color: #f5f7fa;
    color: #909399;
  }
}
// size
.ayu-input.ayu-input--large {
  .ayu-input__inner,
  .ayu-input__prepand,
  .ayu-input__append,
  .input-icon {
    line-height: 40px;
    height: 40px;
  }
}
.ayu-input.ayu-input--small {
  .ayu-input__inner,
  .ayu-input__prepand,
  .ayu-input__append,
  .input-icon {
    line-height: 32px;
    height: 32px;
    font-size: 13px;
  }
}
.ayu-input.ayu-input--mini {
  .ayu-input__inner,
  .ayu-input__prepand,
  .ayu-input__append,
  .input-icon {
    line-height: 28px;
    height: 28px;
    font-size: 12px;
  }
}
</style>
