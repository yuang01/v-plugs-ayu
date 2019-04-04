<template>
  <div class="ayu-hover-tip">
    <div class="ayu-hover-tip_part">
      <slot name="hover-part">
        <ayu-icon icon-class="question" style="font-size: 18px;"/>
      </slot>
    </div>
    <div class="ayu-hover-tip_tip" :class="placement">
      <!-- 用户输入部分 -->
      <slot name="tip-part"></slot>
      <!-- 箭头 -->
      <div class="tip_arrow"></div>
      <!-- 遮挡箭头在div里面部分 -->
      <div class="tip_block"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AyuHoverTip',
  props: {
    placement: {
      type: String,
      default: 'top-center'
    }
  }
}
</script>

<style lang="scss" scoped>
.ayu-hover-tip {
  position: relative;
  display: inline-flex;
  .ayu-hover-tip_part {
    display: flex;
    align-items: center;
  }
  .ayu-hover-tip_tip {
    padding: 20px;
    width: max-content;
    white-space: normal;
    word-break: break-all;
    border-radius: 4px;
    background-color: #fff;
    border-color: transparent #fff transparent transparent;
    box-shadow: 0 0 4px 0 #babec1;
    z-index: 2;
    .tip_arrow {
      position: absolute;
      width: 16px;
      height: 16px;
      background-color: #fff;
      box-shadow: 0 0 4px 0 #babec1;
    }
    .tip_block {
      position: absolute;
      background: #fff;
    }
  }
  .top-center {
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-bottom: 8px;
    transform: translateX(-50%);
    .tip_arrow {
      left: 50%;
      transform: translateY(50%) translateX(-50%) rotate(45deg);
    }
    .tip_block {
      left: 50%;
      width: 30px;
      height: 20px;
      transform: translateX(-50%);
    }
  }
}
</style>

