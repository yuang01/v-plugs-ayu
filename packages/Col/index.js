import Col from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
Col.install = function (Vue) {
  Vue.component(Col.name, Col)
}

// 默认导出组件
export default Col
