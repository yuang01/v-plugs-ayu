import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DemoBlock from './components/demo-block.vue'
Vue.component('demo-block', DemoBlock)
import 'highlight.js/styles/github.css';
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
