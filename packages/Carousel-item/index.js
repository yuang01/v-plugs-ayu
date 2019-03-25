import CarouselItem from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
CarouselItem.install = function (Vue) {
  Vue.component(CarouselItem.name, CarouselItem)
}

// 默认导出组件
export default CarouselItem
