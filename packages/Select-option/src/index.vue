<template>
  <div
    :class="['select-option-wrapper', { 'is-selected': isSelect }, { 'is-disabled': disabled }]"
    @click.stop="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter.js'
export default {
  name: 'AyuOption',
  mixins: [Emitter],
  props: {
    value: { type: [Object, String, Number], required: true },
    label: { type: String },
    disabled: { type: Boolean, defa: false }
  },
  inject: ["ayuSelect"],
  computed: {
    isSelect() {
      const {
        ayuSelect: { optionKey, selectItems }
      } = this;
      const key = this[optionKey] || this.$attrs[optionKey];

      return selectItems.find(item => item.key === key);
    }
  },
  watch: {
    ["ayuSelect.selectValue"]: {
      handler(newValue) {
        const {
          value,
          label,
          ayuSelect: { optionKey, multiple, selectValue }
        } = this;
        const key = this[optionKey] || this.$attrs[optionKey];

        if (
          newValue === value ||
          (Array.isArray(newValue) && newValue.find(item => item === value))
        ) {
          if (!multiple) {
            this.ayuSelect.selectItems = [
              {
                key,
                label,
                value
              }
            ];
          } else {
            this.ayuSelect.selectItems.push({
              key,
              label,
              value
            });
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    handleSelect(key) {
      let {
        ayuSelect: { multiple, selectValue },
        value,
        label,
        isSelect
      } = this;

      if (!multiple) {
        this.ayuSelect.selectValue = value;
        this.ayuSelect.isOpen = false;
      } else {
        if (isSelect) {
          this.ayuSelect.selectValue = selectValue.filter(
            item => item !== value
          );
        } else {
          this.ayuSelect.selectValue.push(value);
        }
      }
      this.ayuSelect.$emit("change", this.ayuSelect.selectValue);
      this.ayuSelect.$emit("input", this.ayuSelect.selectValue);
      // 将当前的值发送到 ayuFormItem 进行校验
      this.dispatch('ayuFormItem','on-form-change', this.ayuSelect.selectValue)
    },

    handleClick() {
      let {
        ayuSelect: { multiple, optionKey, selectValue },
        disabled
      } = this;
      const key = this[optionKey] || this.$attrs[optionKey];

      if (!disabled) {
        this.handleSelect(key);
      }
    }
  }
};
</script>
