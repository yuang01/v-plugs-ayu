// 导入公共样式
import '../examples/style/common.scss';
// 导入字体
import '../examples/icon/iconfont.js'
// 导入组件
import Button from './Button'
import Icon from './Icon'
import Carousel from './Carousel'
import CarouselItem from './Carousel-item'
import Floatinput from './FloatInput'
import Pagination from './Pagination'
import Select from './Select'
import SelectItem from './Select-option'
import MessageBox from './Message-box'
import HoverTip from './Hover-tip'
import Input from './Input'

// 存储组件列表
const components = [
  Button,
  Icon,
  Carousel,
  CarouselItem,
  Floatinput,
  Pagination,
  Select,
  SelectItem,
  HoverTip,
  Input
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  Button,
  Icon,
  Carousel,
  CarouselItem,
  Floatinput,
  Pagination,
  Select,
  SelectItem,
  MessageBox,
  HoverTip,
  Input
}
