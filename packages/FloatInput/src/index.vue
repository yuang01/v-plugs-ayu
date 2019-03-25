<template>
  <div class="float_input">
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
      <span class="clean" @click="cleanText" v-if="this.value !== '' ">x</span>
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

<style scoped>
/* eslint-disable */
.float_input {
  position: relative;
  width: 100%;
  height: 40px;
}
.form-control {
  position: relative;
  width: 100%;
  display: block;
  outline: none;
  border: 0px;
  color: #76838f;
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: linear-gradient(#3e8ef7, #3e8ef7),
                    linear-gradient(#e4eaec, #e4eaec);
  background-position: center bottom, center calc(100% - 1px);
  background-size: 0 2px, 100% 1px;
  padding: 0.6em 0;
  padding-right: 20px;
  box-sizing: border-box;
  font-size: 1rem;
  z-index: 2;
}
.input_placeholder {
  position: absolute;
  display: block;
  color: rgb(164, 169, 170);
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 1rem;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}
.form-control.has-default:focus,
.form-control.has-danger:focus,
.form-control.has-danger:not(.empty),
.form-control.has-warning:focus,
.form-control.has-warning:not(.empty),
.form-control.has-success:focus,
.form-control.has-success:not(.empty),
.form-control.has-info:focus,
.form-control.has-info:not(.empty) {
  transition-duration: 0.3s;
  background-size: 100% 2px, 100% 1px;
}
.form-control.has-danger:focus,
.form-control.has-danger:not(.empty) {
  background-image: linear-gradient(#ff4c52, #ff4c52),
                    linear-gradient(#e4eaec, #e4eaec);
}
.form-control.has-default:focus {
  background-image: linear-gradient(#3e8ef7, #3e8ef7),
                    linear-gradient(#e4eaec, #e4eaec);
}
.form-control.has-warning:focus,
.form-control.has-warning:not(.empty) {
  background-image: linear-gradient(#eb6709, #eb6709),
                    linear-gradient(#e4eaec, #e4eaec);
}
.form-control.has-success:focus,
.form-control.has-success:not(.empty) {
  background-image: linear-gradient(#11c26d, #11c26d),
                    linear-gradient(#e4eaec, #e4eaec);
}
.form-control.has-info:focus,
.form-control.has-info:not(.empty) {
  background-image: linear-gradient(#0bb2d4, #0bb2d4),
                    linear-gradient(#e4eaec, #e4eaec);
}
.form-control.has-default:focus + .input_placeholder,
.form-control.has-danger:focus + .input_placeholder,
.form-control.has-warning:focus + .input_placeholder,
.form-control.has-success:focus + .input_placeholder,
.form-control.has-info:focus + .input_placeholder {
  transform: translateY(-1em);
  font-size: 0.9rem;
}
.form-control.has-default:focus + .input_placeholder {
  color: #3e8ef7;
}
.form-control.has-danger:focus + .input_placeholder,
.form-control.has-danger:not(.empty) + .input_placeholder {
  color: #ff4c52;
}
.form-control.has-warning:focus + .input_placeholder,
.form-control.has-warning:not(.empty) + .input_placeholder {
  color: #eb6709;
}
.form-control.has-success:focus + .input_placeholder,
.form-control.has-success:not(.empty) + .input_placeholder {
  color: #11c26d;
}
.form-control.has-info:focus + .input_placeholder,
.form-control.has-info:not(.empty) + .input_placeholder {
  color: #0bb2d4;
}
.toTop {
  transform: translateY(-1em);
  font-size: 0.9rem;
}
.clean {
  position: absolute;
  right: 0.5rem;
  bottom: 0.6rem;
  opacity: 1;
  display: block;
  z-index: 2;
  transition: all 0.2s linear;
}
.clean:hover {
  cursor: pointer;
}
.move-enter,
.move-leave-active {
  right: -0.5rem;
  opacity: 0;
}
</style>
