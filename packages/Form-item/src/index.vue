<template>
  <div class="ayu-form-item">
    <label 
      class="ayu-form-item__label" 
      :class="isRequired ? 'ayu-form-item__label-required' : 'ayu-form-item__label-noRequired' "
      v-if="label || $slots.label"
      :style="labelStyle">
      {{label}}
    </label>
    <div class="ayu-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="fade">
        <div class="ayu-form-item__message" v-if="validateState==='error'">{{validateMessage}}</div>
      </transition>
    </div>
  </div>
</template>

<script>
import Emitter from "../../mixins/emitter.js";
import schema from "async-validator";
export default {
  name: "ayuFormItem",
  mixins: [Emitter],
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    },
    rules: {
      type: Array,
    },
    labelWidth: String,
  },
  computed: {
    // 当前item的值
    fieldValue() {
      return this.form.model[this.prop];
    },
    // label的style
    labelStyle() {
      const obj = {};
      if (this.form.labelPosition === 'top') return obj;
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth) {
        obj.width = labelWidth;
      }
      obj.textAlign = this.form.labelPosition;
      obj.float = 'left';
      return obj;
    },
    // 内容部分的style
    contentStyle() {
      const obj = {};
      if (this.form.labelPosition === 'top') return obj;
      const labelWidth = this.labelWidth || this.form.labelWidth;
      obj.marginLeft = labelWidth;
      return obj;
    }
  },
  data() {
    return {
      initialValue: "", // 储存默认值
      isRequired: false, // 当前的是否有问题
      validateState: "", // 是否校验成功
      validateMessage: "" // 校验失败文案
    };
  },
  methods: {
    /**
     * 绑定事件 进行是否 required 校验
     */
    setRules() {
      let that = this;
      let rules = this.getRules(); //拿到父组件过滤后当前需要使用的规则
      if (rules.length) {
        // every 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）
        // some 只要有一个符合就返回true
        this.isRequired = rules.some(rule => {
          // 如果当前校验规则中有必填项，则标记出来
          return rule.required;
        });
      }
      /**
       * blur 事件
       */
      this.$on("on-form-blur", that.onFieldBlur);
      /**
       * change 事件
       */
      this.$on("on-form-change", that.onFieldChange);
    },
    /**
     * 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
     */
    getRules() {
      let that = this;
      let rules = that.form.rules;
      rules = this.rules ? this.rules : rules[that.prop];
      return [].concat(rules || []); //这种写法可以让规则肯定是一个数组的形式
    },
    /**
     * Blur 进行表单验证
     */
    onFieldBlur() {
      this.validation("blur");
    },
    /**
     * change 进行表单验证
     */
    onFieldChange() {
      this.validation("change");
    },
    /**
     * 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
     */
    getFilteredRule(trigger) {
      let rules = this.getRules();
      // !res.trigger 没有调用方式的时候默认就校验的
      // filter 过滤出当前需要的规则
      return rules.filter(
        res => !res.trigger || res.trigger.indexOf(trigger) !== -1 || !this.isContained(res.trigger, trigger)
      );
    },
    isContained(a, b) {
      if(!(a instanceof Array) || !(b instanceof Array)) return false;
      return true;
    },
    /**
     * 校验数据
     * @param trigger 校验类型
     * @param callback 回调函数
     */
    validation(trigger, callback = function() {}) {
      // blur 和 change 是否有当前方式的规则
      let rules = this.getFilteredRule(trigger);
      // 判断当前是否有规则
      if (!rules || rules.length === 0) {
        return;
      }
      // 设置状态为校验中
      // async-validator的使用形式
      this.validateState = "validating";
      var validator = new schema({ [this.prop]: rules });
      // firstFields: true 只会校验一个
      validator.validate(
        { [this.prop]: this.fieldValue },
        { firstFields: true },
        (errors, fields) => {
          this.validateState = !errors ? "success" : "error";
          this.validateMessage = errors ? errors[0].message : "";
          callback(this.validateMessage);
        }
      );
    },
    /**
     * 清空当前的 form-item
     */
    resetField() {
      this.form.model[this.prop] = this.initialValue;
      this.validateState = "validating";
    }
  },
  // 组件渲染时，将实例缓存在 Form 中
  mounted() {
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch("ayuForm", "on-form-item-add", this);
      // 设置初始值，以便在重置时恢复默认值
      this.initialValue = this.fieldValue;
      // 添加表单校验
      this.setRules();
    };
  },
  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy() {
    this.dispatch("ayuForm", "on-form-item-remove", this);
  }
};
</script>
