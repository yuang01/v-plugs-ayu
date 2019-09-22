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
      <span v-if="(suffixIcon || this.$slots.suffix) && !showClear" class="input-icon">
        <slot name="suffix"></slot>
        <ayu-icon v-if="suffixIcon" :icon-class="suffixIcon"></ayu-icon>
      </span>
    </template>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter.js'
export default {
  name: 'AyuInput',
  mixins: [Emitter],
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
    // 对原生事件进行监听并作覆盖
    // https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6
    inputListeners() {
      const self = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: event => {
            this.$emit('input', event.target.value);
            // 将当前的值发送到 ayuFormItem 进行校验
            this.dispatch('ayuFormItem','on-form-change',event.target.value)
          },
          change: event => {
            this.$emit('change', event.target.value);
          },
          blur: event => {
            // 将当前的值发送到 ayuFormItem 进行校验
            this.dispatch('ayuFormItem','on-form-blur',event.target.value)
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
