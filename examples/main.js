import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入公共样式
import './style/common.scss';
// 导入组件库
import ayu from './../packages/index';
// 注册组件库
Vue.use(ayu)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
