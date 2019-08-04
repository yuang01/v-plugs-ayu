<template>
  <div class="ayu-input-number" ref="ayu-input-number">
    <ayu-input 
      :disabled="disabled"
      @change="handleChange"
      v-model="inputValue"
      v-bind="$attrs"
      @focus="event => $emit('focus', event)"
      @blur="event => $emit('blur', event)"
    >
      <template slot="prepend">
        <div @mousedown.stop="!decDisabled && handleClick('dec')" class="prepend-button" :class="{'disabled': disabled || decDisabled}">
          <ayu-icon icon-class="minus" :disabled="disabled"></ayu-icon>
        </div>
      </template>
      <template slot="append">
        <div @mousedown.stop="!addDisabled && handleClick('add')" class="append-button" :class="{'disabled': disabled || addDisabled}">
          <ayu-icon icon-class="plus" :disabled="disabled"></ayu-icon>
        </div>
      </template>
    </ayu-input>
  </div>
</template>

<script>
const isNum = num => !isNaN(num * 1) && Object.prototype.toString.call(num * 1) === "[object Number]";
export default {
  name: 'AyuInputNumber',
  props: {
    value: {
      type: [Number],
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      // Infinity 无穷大
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      inputValue: 0,
      oldValue: 0,
    }
  },
  computed: {
    decDisabled() {
      return this.disabled || (isNum(this.min) && this.inputValue <= this.min);
    },
    addDisabled() {
      return this.disabled || (isNum(this.max) && this.inputValue >= this.max);
    },
    inputNumberValue: {
      get() {
        return this.inputValue;
      },
      set(value) {
        const { min, max, inputValue } = this;
        const limits = [
          {
            need: value => {
              return !isNum(value);
            },
            value: inputValue
          },
          {
            need: value => value >= max,
            value: max
          },
          {
            need: value => value <= min,
            value: min
          },
          {
            need: () => true,
            value: value * 1
          }
        ];

        this.inputValue = limits.find(limit => limit.need(value)).value;
      }
    }
  },
  watch: {
    inputValue(val) {
      let p = /[^\d]/g;
      if (!p.test(val)) {
        this.oldValue = val;
      }
      this.$emit('input', Number(val));
    },
    value: {
      handler(val) {
        this.inputNumberValue = val;
      },
      immediate: true
    }
  },
  methods: {
    handleChange(val) {
      let p = /[^\d]/g; // 如果不是数字
      if (p.test(val)) {
        this.inputNumberValue = this.oldValue;
      } else {
        this.inputNumberValue = val;
      }
      this.$emit('change', this.inputValue);
    },
    // 鼠标长按事件mousedown
    handleClick(type) {
      const { step } = this;
      const period = 100;
      // 当鼠标长按住加号或者减号，使用定时器，间隔为100毫秒，加上step，step默认为1
      const timerHandle = () => {
        const { addDisabled, decDisabled } = this;
        // 在不是禁止状态，或加或减
        if (!addDisabled && type === "add") this.inputNumberValue += step;
        if (!decDisabled && type === "dec") this.inputNumberValue -= step;
      }
      
      // 创建定时器
      const timer = setInterval(timerHandle, period);
      const startTime = new Date();

      // 当鼠标松开的时候，关闭定时器
      const clearTimerHandle = () => {
        // 鼠标松开时，获取时间
        const endTime = new Date();
        // 松开时的时间减去按下时的时间，如果小于定时器间隔，则相当于或加或减一次
        if (endTime - startTime < period) timerHandle();
        // 清除定时器, 同事删除鼠标松开事件
        clearInterval(timer);
        document.removeEventListener('mouseup', clearTimerHandle, false);
      };

      // 鼠标按下时，增加鼠标松开事件
      document.addEventListener('mouseup', clearTimerHandle, false);
      this.$emit('change', this.inputValue);
    }
  }
}
</script>
