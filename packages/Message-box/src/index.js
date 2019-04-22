import Vue from 'vue'
import messageBox from './index.vue'

const Constructor = Vue.extend(messageBox)

function generateInstance(options, type = 'alert') {
  let instance = new Constructor({
    propsData: Object.assign(options, {
      type,
    }),
  }).$mount(document.createElement('div'))

  if (typeof options.onConfirm === 'function') {
    instance.onConfirm = options.onConfirm
    instance.$on('confirm', function () {
      instance.onConfirm()
    })
  }

  if (typeof options.onCancel === 'function') {
    instance.onCancel = options.onCancel
    instance.$on('cancel', function () {
      instance.onCancel()
    })
  }

  if (typeof options.onClose === 'function') {
    instance.onClose = options.onClose
    instance.$on('close', function () {
      instance.onClose()
    })
  }

  return instance
}
const MessageBox = {}
MessageBox.alert = (options = {}) => generateInstance(options)
MessageBox.confirm = (options = {}) => generateInstance(options, 'confirm')
export default MessageBox
export { MessageBox }