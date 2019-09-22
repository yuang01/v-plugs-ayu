import Form from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
Form.install = function (Vue) {
  Vue.component(Form.name, Form)
}

// 默认导出组件
export default Form
