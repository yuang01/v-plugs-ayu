import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DemoBlock from './components/demo-block.vue'
Vue.component('demo-block', DemoBlock)
import 'highlight.js/styles/atelier-seaside-dark.css';
// 导入组件库
import ayu from './../packages/index';
import './color.scss';
// 注册组件库
Vue.use(ayu)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
