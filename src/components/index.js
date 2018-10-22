import Vue from "vue"
import FloatInput from "./FloatInput.vue"
import Pagination from "./Pagination.vue"
const Components = {
  FloatInput,
  Pagination
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
});

export default Components
