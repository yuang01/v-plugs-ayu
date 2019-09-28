<template>
  <!-- <div class="container"> -->
    <!-- <header class="header">
      <div class="content">
        <h1>
          <router-link to='/'>
            <img src="../../assets/ayu.png" alt="">
          </router-link>
        </h1>

        <div class="right">
          <div class="color-btn">
            <span v-for="(item, index) in bgColorlist" :key="index" :style="{'background-color': item}"></span>
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
    </header> -->
    <!-- <div class="main"> -->

      <div class="main-">
        <div class="main--left">
          <ul>
            <li v-for="item in menuPath" :key="item.path">
              <router-link :to="item.path">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
        <div class="main--right">
          <router-view class="markdown"></router-view>
        </div>
      </div>

    <!-- </div> -->
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      menuPath: [
        { path: '/components/install', name: '安装' },
        { path: '/components/customized', name: '定制化' },
        { path: '/components/button', name: 'button 按钮' },
        { path: '/components/floatinput', name: 'floatinput 浮动输入框' },
        { path: '/components/pagination', name: 'pagination 分页' },
        { path: '/components/select', name: 'select 选择器' },
        { path: '/components/carousel', name: 'carousel 幻灯片' },
        { path: '/components/messageBox', name: 'messageBox 弹框' },
        { path: '/components/icon', name: 'icon 图标' },
        { path: '/components/hoverTip', name: 'hoverTip 提示' },
        { path: '/components/input', name: 'input 输入框' },
        { path: '/components/message', name: 'message 消息提示' },
        { path: '/components/notification', name: 'Notification 通知' },
        { path: '/components/layout', name: 'Layout 布局' },
        { path: '/components/radio', name: 'Radio 单选' },
        { path: '/components/checkbox', name: 'CheckBox 多选' },
        { path: '/components/circle', name: 'Circle 进度条' },
        { path: '/components/inputNumber', name: 'inputNumber 计数器' },
        { path: '/components/form', name: 'Form 表单' },
      ],
      // bgColorlist: ['#CE1126', '#dc3545', '#fa541c', '#13c2c2', '#52c41a', '#3e8ef7', '#2f54eb', '#722ed1']
    }
  },
  methods:{
    changeColor() {
      document.getElementsByTagName('body')[0].className = 'orange';
    },
    changeColor2() {
      document.getElementsByTagName('body')[0].className = 'red';
    }
  },
}
</script>
<style lang="scss">
  #app {
    overflow: hidden;
    padding: 0;
    width: 100%;
  }
  #app .main- {
    position: relative;
    width: 1140px;
    padding: 40px 0 0;
    margin: 0 auto;
    height: auto;
    zoom: 1;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  #app .main- .main--left {
    float: left;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    .router-link-active {
      color: var(--primary-color);
      border-right: 3px solid var(--primary-color);
    }
  }
  #app .main- .main--left ul {
    width: 250px;
    margin: 0;
    padding: 0;
  }
  #app .main- .main--left ul li {
    margin: 0;
    list-style: none;
    padding: 0;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  #app .main- .main--left ul li a {
    font-size: 16px;
    color: #333;
    line-height: 40px;
    height: 40px;
    margin: 0;
    padding: 4px 25px;
    text-decoration: none;
    display: block;
    position: relative;
    -webkit-transition: 0.15s ease-out;
    transition: 0.15s ease-out;
    font-weight: 700;
    border-right: 1px solid #e8e8e8;
  }
  #app .main- .main--left ul li a:hover {
    color: var(--primary-color);
  }
  #app .main- .main--left ul li.main--link-group {
    height: auto;
  }
  #app .main- .main--left ul li.main--link-group a:hover {
    color: #333;
    cursor: default;
  }
  #app .main- .main--left ul li.main--link-group ul a {
    display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
  }
  #app .main- .main--left ul li.main--link-group ul a:hover {
    color: #3e8ef7;
    cursor: pointer;
  }
  #app .main- .main--right {
    padding: 0 2px 140px 20px;
    min-height: 500px;
    overflow: hidden;
  }
  .markdown h1 {
    color: #0d1a26;
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 8px;
    font-size: 30px;
    line-height: 38px;
  }
  .markdown h2,
  .markdown h3,
  .markdown h4,
  .markdown h5,
  .markdown h6 {
    font-family: Lato;
    margin: 1.6em 0 0.6em;
    font-weight: 500;
    clear: both;
  }
  .markdown h3 {
    font-size: 18px;
  }
  .markdown h4 {
    font-size: 16px;
  }
  .markdown h5 {
    font-size: 14px;
  }
  .markdown h6 {
    font-size: 12px;
  }
  .markdown p,
  .markdown pre {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
  .markdown pre {
    background-color: #f2f4f5;
    padding: 18px 24px;
  }
  // .markdown ul > li > p,
  // .markdown ol > li > p {
  //   margin: 0.2em 0;
  // }
  // .markdown ul {
  //   padding: 0;
  //   margin: 0;
  // }
  // .markdown ul > li {
  //   list-style-type: circle;
  //   margin-left: 20px;
  //   padding-left: 4px;
  //   padding-top: 15px;
  // }
  // .markdown ol > li {
  //   list-style-type: decimal;
  //   margin-left: 20px;
  //   padding-left: 4px;
  //   padding-top: 15px;
  // }
  .markdown > table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #ebedf0;
    width: 100%;
    margin: 8px 0 16px;
  }
  .markdown > table th,
  .markdown > table td {
    color: #314659;
    border: 1px solid #ebedf0;
    text-align: left;
    padding: 10px 15px;
  }
  .markdown > table th {
    white-space: nowrap;
    color: #5c6b77;
    font-weight: 500;
    background: rgba(0, 0, 0, 0.02);
  }
  .markdown strong,
  .markdown b {
    font-weight: 500;
  }
  .markdown .sh-markdown-permalink {
    opacity: 0;
  }
  .markdown h1:hover .sh-markdown-permalink,
  .markdown h2:hover .sh-markdown-permalink,
  .markdown h3:hover .sh-markdown-permalink,
  .markdown h4:hover .sh-markdown-permalink,
  .markdown h5:hover .sh-markdown-permalink,
  .markdown h6:hover .sh-markdown-permalink {
    opacity: 1;
    display: inline-block;
  }
  .markdown > br,
  .markdown p > br {
    clear: both;
  }
  .markdown blockquote {
    font-size: 90%;
    color: #0d1a26;
    border-left: 4px solid #ebedf0;
    padding-left: 0.8em;
    margin: 1em 0;
  }
  .markdown blockquote p {
    margin: 0;
  }
  .markdown hr {
    height: 1px;
    border: 0;
    background: #ebedf0;
    clear: both;
  }
  .markdown code {
    font-family: Microsoft YaHei;
    margin: 0 1px;
    background: #f2f4f5;
    padding: 0.2em 0.5em;
    border-radius: 3px;
    font-size: 0.9em;
    border: 1px solid #eee;
  }
</style>
