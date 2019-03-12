import Vue from "vue"
import ayuFloatinput from "./FloatInput"
import ayuPagination from "./Pagination"
import ayuSelect from "./components/Select";
import ayuOption from "./components/Select/option";
const Components = {
  ayuFloatinput,
  ayuPagination,
  ayuSelect,
  ayuOption
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
});

export default Components
