import Row from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
Row.install = function (Vue) {
  Vue.component(Row.name, Row)
}

// 默认导出组件
export default Row
