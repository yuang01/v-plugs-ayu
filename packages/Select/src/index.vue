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

<style lang="scss">
.select-wrapper {
  position: relative;
  padding: 0 24px 0 12px;
  width: 100%;
  min-height: 32px;
  line-height: 32px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  text-overflow: ellipsis;
  outline: none;
  transition: all 0.2s;

  &:focus {
    text-overflow: ellipsis;
    border: 1px solid #209cee;
  }

  &.is-disabled {
    background-color: rgba(192, 196, 204, 0.25);
    color: #c0c4cc;
    cursor: not-allowed;
    &:focus {
      box-shadow: none;
      border: 1px solid #ccc;
    }
  }

  .placeholder {
    color: #999;
  }

  .select__item_tag {
    position: relative;
    display: inline-flex;
    align-items: center;
    margin: 2px 6px 2px 0;
    padding: 4px 4px;
    height: 1em;
    color: #909399;
    background: #f0f2f5;
    border-radius: 4px;
    .delete-btn {
      margin-left: 4px;
      border-radius: 50%;
      display: block;
      padding: 1px;
      box-sizing: border-box;
      font-size: 10px;
      line-height: .8em;
      color: #fff;
      background: #c0c4cc;
      cursor: pointer;
    }
  }

  .arrow {
    position: absolute;
    display: block;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 1em;
    font-size: 1.2em;
    font-weight: 600;
    color: #ccc;
    transform-origin: center center;
    transition: transform .3s;
  }
  .rotated {
    transform: translateY(-50%) rotate(180deg);
  }

  .select-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 12px;
    padding: 4px 0;
    box-sizing: border-box;
    min-width: 100%;
    max-height: 170px;
    overflow: auto;
    z-index: 2;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>
