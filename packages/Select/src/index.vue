<template>
  <transition name="fade">
    <div
      :class="['select-wrapper', { 'is-disabled': disabled }]"
      tabindex="0"
      @click.stop="isOpen = !disabled && !isOpen"
      @blur="handleBlur"
      @focus="handleFocus"
    >
      <div class="select-top-part">
        <template v-if="!selectItems.length">
          <span class="placeholder">{{ placeholder }}</span>
        </template>

        <template v-else>
          <div v-if="!multiple">{{ selectItems[0].label }}</div>

          <template v-else-if="!collapseTags">
            <span v-for="value in selectItems" :key="value.key" class="select__item_tag c-size-s">
              {{ value.label }}
              <ayu-icon icon-class="close" class="delete-btn" @click.native.stop="handleDelete(value)" />
            </span>
          </template>
          <template v-else>
            <span class="select__item_tag c-size-s">
              {{ selectItems[0].label }}
              <ayu-icon icon-class="close" class="delete-btn" @click.native.stop="handleDelete(selectItems[0])" />
            </span>
            <span v-if="restValueNum" class="select__item_tag c-size-s c-bold">
              +
              {{ restValueNum }}
            </span>
          </template>
        </template>
      </div>
      <span class="arrow" :class="{'rotated': isOpen}"><ayu-icon icon-class="down"/></span>
      <div class="select-dropdown" v-show="isOpen">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AyuSelect',
  props: {
    placeholder: { type: String, default: "请选择" },
    optionKey: { type: String, default: "value" },
    value: { type: [String, Object, Number, Array] },
    multiple: { type: Boolean, default: false },
    collapseTags: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  model: {
    prop: "value",
    event: "input"
  },
  data() {
    return {
      isOpen: false,
      selectValue: [],
      selectItems: []
    };
  },
  provide() {
    return {
      ayuSelect: this
    };
  },
  computed: {
    restValueNum() {
      return this.selectItems.length - 1;
    }
  },
  watch: {
    value: {
      handler(value) {
        const { multiple } = this;
        const init = value ? value : multiple ? [] : "";
        this.selectValue = multiple ? [...init] : init;
      },
      immediate: true
    },
    selectValue: {
      handler(value) {
        this.selectItems = [];
      }
    }
  },
  methods: {
    handleDelete(item) {
      const { value } = item;
      this.selectValue = this.selectValue.filter(item => item !== value);
      this.$emit("input", this.selectValue);
      this.$emit("change", this.selectValue);
    },
    handleBlur(event) {
      this.isOpen = false;
      this.$emit('blur', event);
    },
    handleFocus(event) {
      this.$emit('focus', event);
    }
  }
};
</script>
