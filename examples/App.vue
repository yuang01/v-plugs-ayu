<template>
  <div id="app">
    <div class="container">
      <header class="header">
        <div class="content">
          <h1>
            <router-link to='/'>
              <img src="./assets/ayu.png" alt="">
            </router-link>
          </h1>

          <div class="right">
            <div class="color-btn">
              <span 
                v-for="(item, index) in bgColorlist" 
                :key="index" 
                :style="{'background-color': item}"
                @click="changeColor(item)"
              ></span>
            </div>
            <ul class="nav">
              <li :class="{'active': $route.path === '/components/install'}">
                <router-link to="/components/install">安装</router-link>
              </li>
              <li :class="{'active': $route.path === '/components/button'}">
                <router-link to="/components/button">组件</router-link>
              </li>
              <li>
                <a href='https://github.com/yuang01/v-plugs-ayu' target="_blank">Github</a>
              </li>
              <li>
                <a href='http://yuang.site' target="_blank">博客</a>
              </li>
            </ul>
          </div>
          
        </div>
      </header>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
    <div class="my-special-button" v-if="isShow" @mouseover="show" @mouseout="hide">
      <div class="my-special-button__content">
        在线讨论<ayu-icon icon-class="tickets" class="blink"></ayu-icon>
      </div>
      <ayu-icon v-if="showClose" icon-class="close" class="close" @click.stop.native="close"></ayu-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      showClose: false,
      bgColorlist: ['#CE1126', '#e47b14', '#fa541c', '#13c2c2', '#52c41a', '#3e8ef7', '#2f54eb', '#722ed1']
    };
  },
  methods: {
    close() {
      this.isShow = false;
    },
    show() {
      this.showClose = true;
    },
    hide() {
      this.showClose = false;
    },
    // 改变颜色
    changeColor(color) {
      const obj = {
        '#CE1126': 'crimson', // 深红
        '#e47b14': 'coffee', // 咖啡色
        '#fa541c': 'orange', // 橙色
        '#13c2c2': 'light-green', // 浅绿色
        '#52c41a': 'green', // 绿色
        '#3e8ef7': 'default', // 默认颜色
        '#2f54eb': 'navy-blue', // 深蓝色
        '#722ed1': 'violet', // 紫色
      };
      const curColor = obj[color];
      document.getElementsByTagName('body')[0].className = curColor;
      document.getElementById('app').style.setProperty('--primary-color', color);
    }
  },
  mounted() {
    document.getElementsByTagName('body')[0].className = 'crimson';
  }
};
</script>

<style lang="scss" scoped>
#app {
   --primary-color: #CE1126;
  .my-special-button {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--primary-color);
    padding: 10px;
    color: #fff;
    user-select: none;
    cursor: pointer;
    .my-special-button__content {
      width: 20px;
      font-size: 20px;
      word-wrap: break-word;
      .blink {
        animation: blink 1s linear infinite;
        /* 其它浏览器兼容性前缀 */
        -webkit-animation: blink 1s linear infinite;
        -moz-animation: blink 1s linear infinite;
        -ms-animation: blink 1s linear infinite;
        -o-animation: blink 1s linear infinite;
      }
    }
    .close {
      position: absolute;
      top: -12px;
      right: 2px;
      font-size: 12px;
      color: var(--primary-color);
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: hidden;
    .header {
      height: 80px;
      background-color: #fff;
      color: #fff;
      width: 100%;
      line-height: 80px;
      z-index: 100;
      position: relative;
      .content {
        height: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdfe6;
        margin: 0 auto;
        width: 1140px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1 {
          width: 146px;
          height: 80px;
          overflow: hidden;
          img {
            width: 100%;
            height: 90%;
          }
        }
        .right {
          display: flex;
          align-items: center;
          height: 80px;
          box-sizing: border-box;
          padding: 0 40px 0 0;
          .color-btn {
            display: inline-flex;
            span {
              display: inline-block;
              width: 20px;
              height: 20px;
              border-radius: 5px;
              background-color: red;
              margin-left: 10px;
              cursor: pointer;
              &:hover {
                opacity: 0.8;
              }
            }
          }
          .nav {
            height: 80px;
            display: flex;
            width: 300px;
            justify-content: space-between;
            list-style: none;
            a {
              text-decoration: none;
              color: var(--primary-color);
            }
            li.active {
              border-bottom: 3px solid var(--primary-color); 
            }
          }
        }
      }
    }
    .main {
      width: 100%;
      flex: 1;
      overflow-y: scroll;
    }
  }
  
  // 文字闪烁
  /* 定义keyframe动画，命名为blink */
  @keyframes blink {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  /* 添加兼容性前缀 */
  @-webkit-keyframes blink {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-moz-keyframes blink {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-ms-keyframes blink {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-o-keyframes blink {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Microsoft YaHei;
  }
  /* 滚动条样式 */
  /*修改滚动条样式*/
  div::-webkit-scrollbar{
    width: 8px;
    height: 10px;
    /**/
  }
  div::-webkit-scrollbar-track{
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }
  div::-webkit-scrollbar-thumb{
    background: #bfbfbf;
    border-radius: 10px;
  }
  div::-webkit-scrollbar-thumb:hover{
    background: #333;
  }
  div::-webkit-scrollbar-corner{
    background: #179a16;
  }
</style>

