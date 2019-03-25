import Icon from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon)
}

// 默认导出组件
export default Icon
