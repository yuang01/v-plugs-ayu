<template>
  <div class="ayu-float-input">
    <input class="form-control" :class="[hascolor, {'empty': this.val === ''}]"
    :type="type"
    :value="value"
    :required="required"
    @input="input($event)"
    @focus="focus()"
    @blur="blur()"
    ref="input">
    <label class="input_placeholder" ref="inputPlaceholder" :class="{'toTop': this.value!== ''}">{{placeholder}}</label>
    <transition name="move">
      <ayu-icon icon-class="close" class="clean" @click.native="cleanText" v-if="this.value !== '' " />
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'AyuFloatinput',
  props: {
    placeholder: {
      default: '',
    },
    value: {
      default: '',
    },
    type: { // input 类型选择，例如'text','password'等
      default: 'text',
    },
    hascolor: { // 定义input颜色
      default: 'has-default',
    },
    color: {
      default: ''
    },
    required: { // 必填设置
      default: false,
    },
  },
  data() {
    return {
      val: this.value
    };
  },
  watch: {
    color(val) {
      if (val !== '') {
        this.customcolor()
      }
    }
  },
  methods: {
    input($event) {
      this.val = $event.target.value
      this.$emit('input', this.val)
    },
    cleanText() {
      this.val = ''
      this.$emit('input', this.val)
      if (this.color !== '') {
        this.initcolor()
      }
    },
    focus() {
      if (this.color !== '') {
        this.customcolor()
      }
    },
    blur() {
      if (this.color !== '' && this.val === '') {
        this.initcolor()
      }
    },
    initcolor() {
      this.$refs.inputPlaceholder.style.color = 'rgb(164, 169, 170)'
      this.$refs.input.style.backgroundImage = `linear-gradient(#3e8ef7, #3e8ef7),linear-gradient(#e4eaec, #e4eaec);`
      this.$refs.input.style.backgroundSize = '0 2px, 100% 1px'
    },
    customcolor() {
      this.$refs.inputPlaceholder.style.color = this.color
      this.$refs.input.style.backgroundImage = `linear-gradient(${this.color}, ${this.color}), linear-gradient(#e4eaec, #e4eaec)`
      this.$refs.input.style.backgroundSize = '100% 2px, 100% 1px'
    }
  }
};
</script>
