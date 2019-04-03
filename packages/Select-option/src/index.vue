<template>
  <div
    :class="['select-option-wrapper', { 'is-selected': isSelect }, { 'is-disabled': disabled }]"
    @click.stop="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AyuOption',
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

<style lang="scss">
$selected-color: #3e8ef7;
$disabled-color: #ccc;
.select-option-wrapper {
  padding: 0 24px 0 12px;
  cursor: pointer;

  &:not(.is-disabled):hover {
    background-color: #f5f7fa;
  }

  &.is-selected {
    color: $selected-color;
  }

  &.is-disabled {
    color: $disabled-color;
    cursor: not-allowed;
  }
}
</style>
