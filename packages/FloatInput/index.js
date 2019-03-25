import Floatinput from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
Floatinput.install = function (Vue) {
  Vue.component(Floatinput.name, Floatinput)
}

// 默认导出组件
export default Floatinput
