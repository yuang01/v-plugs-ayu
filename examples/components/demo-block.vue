<template>
  <div class="demo-block">
    <div class="demo-block-source">
      <slot name="source"></slot>
      <span class="demo-block-code-icon"
        v-if="!$slots.default"
        @click="showCode=!showCode">
          <span v-if='!showCode'>查看代码</span>
          <span v-else>收起代码</span>
        </span>
    </div>
    <div class="demo-block-meta"
      v-if="$slots.default">
      <slot></slot>
      <span v-if="$slots.default"
        class="demo-block-code-icon"
        @click="showCode=!showCode">
          <span v-if='!showCode'>查看代码</span>
          <span v-else>收起代码</span>
      </span>
    </div>
    <div class="demo-block-code"
      v-show="showCode">
      <slot name="highlight"></slot>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'DemoBlock',
  data () {
    return {
      showCode: false
    }
  }
}
</script>
<style lang='scss'>
.demo-block {
  border: 1px solid #ebedf0;
  border-radius: 2px;
  display: inline-block;
  width: 100%;
  position: relative;
  margin: 0 0 16px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  border-radius: 2px;

  pre {
    border: none !important;
  }

  p {
    padding: 0;
    margin: 0;
  }

  .demo-block-code-icon {
    user-select: none;
    position: absolute;
    right: 16px;
    bottom: 6px;
    cursor: pointer;
    color: #888888;
    height: 18px;
    line-height: 18px;
    text-align: center;

    img {
      -webkit-transition: all 0.4s;
      transition: all 0.4s;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      position: absolute;
      left: 0;
      top: 0;
      margin: 0;
      max-width: 100%;
      width: 100%;
      vertical-align: baseline;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }

  .demo-block-source {
    border-bottom: 1px solid #ebedf0;
    padding: 20px 24px 20px;
    color: #444;
    position: relative;
    margin-bottom: -1px;
  }
  .demo-block-meta {
    position: relative;
    padding: 12px 50px 12px 20px;
    border-radius: 0 0 2px 2px;
    -webkit-transition: background-color 0.4s;
    transition: background-color 0.4s;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    color: #444;
    font-size: 14px;
    line-height: 2;
    border-radius: 0;
    border-bottom: 1px dashed #ebedf0;
    margin-bottom: -1px;
  }

  .demo-block-meta {
    position: relative;
    padding: 12px 50px 12px 20px;
    border-radius: 0 0 2px 2px;
    -webkit-transition: background-color 0.4s;
    transition: background-color 0.4s;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    color: #444;
    font-size: 14px;
    line-height: 2;
    border-radius: 0;
    border-bottom: 1px dashed #ebedf0;
    margin-bottom: -1px;
  }

  .demo-block-meta {
    position: relative;
    padding: 12px 50px 12px 20px;
    border-radius: 0 0 2px 2px;
    -webkit-transition: background-color 0.4s;
    transition: background-color 0.4s;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    color: #444;
    font-size: 14px;
    line-height: 2;
    border-radius: 0;
    border-bottom: 1px dashed #ebedf0;
    margin-bottom: -1px;
  }

  .demo-block-meta {
    position: relative;
    padding: 12px 50px 12px 20px;
    border-radius: 0 0 2px 2px;
    -webkit-transition: background-color 0.4s;
    transition: background-color 0.4s;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    color: #444;
    font-size: 14px;
    line-height: 2;
    border-radius: 0;
    border-bottom: 1px dashed #ebedf0;
    margin-bottom: -1px;
  }

  .demo-block-meta {
    position: relative;
    padding: 12px 50px 12px 20px;
    border-radius: 0 0 2px 2px;
    -webkit-transition: background-color 0.4s;
    transition: background-color 0.4s;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    color: #444;
    font-size: 14px;
    line-height: 2;
    border-radius: 0;
    border-bottom: 1px dashed #ebedf0;
    margin-bottom: -1px;

    code {
      color: #444;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 3px 7px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
      font-size: 14px;
    }
  }

  .demo-block-code {
    background-color: #f7f7f7;
    font-size: 0;
    padding: 16px 32px;
    box-sizing: border-box;

    code {
      background-color: #f7f7f7;
      font-family: Consolas, Menlo, Courier, monospace;
      border: none;
      display: block;
      font-size: 14px;
      overflow: auto hidden;
      width: 100%;
    }
  }

  .demo-block-code pre {
    margin: 0;
    padding: 0;
  }
}
.sh-checkbox {
  color: #444;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
}
</style>
