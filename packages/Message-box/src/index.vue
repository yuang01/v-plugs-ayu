<template>
<transition name="fade">
  <div class="ayu-message-box_wrapper" v-if="visible">
    <div class="ayu-message-box">
      <div class="ayu-message-box_header">
        <div class="ayu-message-box_title">{{title}}</div>
        <div class="ayu-message-box_close" v-if="showCloseBtn" @click="handleClick('close')">
          <ayu-icon icon-class="close"></ayu-icon>
        </div>
      </div>
      <div class="ayu-message-box_content" v-html="content"></div>
      <div class="ayu-message-box_footer">
        <ayu-button @click.stop="handleClick('cancel')" v-if="cancelButtonText && type !== 'alert'">取消</ayu-button>
        <ayu-button @click.stop="handleClick('confirm')" type="primary" v-if="cancelButtonText">确定</ayu-button>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import box from '../../mixins/box.js';
export default {
  name: 'AyuMessageBox',
  mixins: [box],
  props: {
    title: { type: String, default: '标题' },
    content: { type: String, default: '一段内容', required: true },
    type: { type: String, default: '' },
    confirmButtonText: { type: String, default: '确定'},
    cancelButtonText: { type: String, default: '取消'},
    showCloseBtn: { type: Boolean, default: true }
  },
  methods: {
    handleClick(clickType) {
      // 传递点击类型，到时候通过option.onXXX判断
      this.$emit(clickType)
      // 不管点击哪个按钮，messageBox都将消失
      this.close();
    }
  },
}
</script>

<style lang="scss" scoped>
.ayu-message-box_wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .ayu-message-box {
    display: flex;
    flex-direction: column;
    min-width: 400px;
    padding: 20px;
    background-color: #fff;
    .ayu-message-box_header {
      display: flex;
      justify-content: space-between;
      padding: 0 0 10px 0;
      .ayu-message-box_title {
        font-size: 18px;
        line-height: 1;
        color: #303133;
      }
      .ayu-message-box_close {
        font-size: 16px;
        line-height: 1;
        font-weight: 400px;
        &:hover {
          color: $color-primary;
          cursor: pointer;
        }
      }
    }
    .ayu-message-box_content {
      position: relative;
      padding: 10px 0;
      color: #606266;
      font-size: 14px;
    }
    .ayu-message-box_footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 5px;
      .ayu-button {
        margin-left: 5px;
      }
    }
  }
}
</style>

