import Vue from 'vue'
import message from './index.vue'

const Constructor = Vue.extend(message)
let index = 0; // 区分不同的instance
let instance = null; // 全局instance，只允许存在一个instance，当new一个instance的时候，关闭当前的instance

function generateInstance(options) {
  let instance = new Constructor({
    // 数据绑定
    propsData: options
  }).$mount(document.createElement('div'))

  if (typeof options.onClose === 'function') {
    instance.onClose = options.onClose;
  }

  let id = `message${index++}`;
  instance.id = id;
  // 执行onClose事件
  instance.$once('messageClose', function () {
    const curInstance = this;
    if (typeof curInstance.onClose === 'function') {
      curInstance.onClose();
    }
  })

  return instance;
}

const Message = {};
Message.$message = (options = {}) => {
  if (instance) instance.$destroy();
  instance = generateInstance(options);
}
Message.$closeMessage = () => {
  if (instance) instance.$destroy();
}
export default Message
export { Message }