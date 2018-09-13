import Vue from "vue"
import FloatInput from "./FloatInput.vue"
const Components = {
  FloatInput
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
});

export default Components
