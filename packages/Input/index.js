import Input from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
Input.install = function (Vue) {
  Vue.component(Input.name, Input)
}

// 默认导出组件
export default Input
