import HoverTip from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
HoverTip.install = function (Vue) {
  Vue.component(HoverTip.name, HoverTip)
}

// 默认导出组件
export default HoverTip
