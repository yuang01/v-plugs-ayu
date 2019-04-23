import Vue from 'vue'
import notification from './index.vue'

let instances = [];
let initIndex = 0;
const verticalOffset = 15;
const NotifyConstructor = Vue.extend(notification);

// 构造单个Notification
function generateInstance(options) {
  let instance = new NotifyConstructor({
    propsData: options,
  }).$mount(document.createElement('div'))

  if (typeof options.onClose === 'function') instance.onClose = options.onClose;

  // 为instance绑定自己的id
  let id = `notify${initIndex++}`;
  instance.id = id;

  //为instance计算初始的垂直偏移量
  instance.verticalOffset = initVerticalOffset(instance.position);

  // 当自动关闭的时候，this.$emit传递了notifyClose事件，在这里需要监听
  instance.$once('notifyClose', function () {
    const curInstance = this;
    // 关闭某个notify的时候需要重新更新notifies的垂直偏移量
    updateVerticalOffset(curInstance);

    if (typeof curInstance.onClose === 'function') {
      curInstance.onClose();
    }
  })
  return instance;
}

// 初始化每个notify在页面中的偏移量, position为方向，对同一个方向的notify进行垂直位置的计算
function initVerticalOffset(position) {
  let keepInstance = instances.filter(item => item.position === position);
  // 将notify的高度设为上面所有的nitify的高度之和, reduce接收function(),initvalue
  return keepInstance.reduce(
    (prev, next) => next.$el.offsetHeight + prev + verticalOffset,
    verticalOffset // 初始值从15开始
  );
}

// 更新每个notify在页面中的垂直位置
function updateVerticalOffset(removeInstance) {
  let index = 0;
  let removeHeight = removeInstance.verticalOffset; // 这个verticalOffset是移出的notify的offsetHeight（position: top值）

  instances.find((item, itemIndex) => {
    if (item.id === removeInstance.id) {
      index = itemIndex;
    }
  })
  // 找到要删除的notify的index之后，通过index（索引）将其删除
  instances.splice(index, 1);

  // 对删除的notify后面的每个notify的垂直偏移量进行更新
  for (index; index < instances.length; ++index) {
    if (instances[index].position === removeInstance.position) {
      [instances[index].verticalOffset, removeHeight] = [
        removeHeight,
        instances[index].verticalOffset,
      ];
    }
  }

}

const Notification = {};
Notification.$notify = (options = {}) => {
  // 单个notify存入队列中
  let instance = generateInstance(options);
  instances.push(instance);
}

export default Notification;
export { Notification };
