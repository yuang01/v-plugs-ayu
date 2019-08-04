<template>
  <div class="home">
    <header class="header">
      <div class="content">
        <h1>
          <router-link to='/button'>
            <img src="../assets/ayu.png" alt="">
          </router-link>
        </h1>

        <ul class="nav">
          <li>
            <router-link to="/install">安装</router-link>
          </li>
          <li>
            <router-link to="/button">组件</router-link>
          </li>
          <li>
            <a href='https://github.com/yuang01/v-plugs-ayu' target="_blank">Github</a>
          </li>
          <li>
            <a href='http://yuang.site' target="_blank">博客</a>
          </li>
        </ul>
      </div>
    </header>

    <div class="desc">
      <h1>网站快速成型工具</h1>
      <p>一套基于vue.js的桌面端组件库</p>

      <img class="center-img" src="../assets/icon.svg" alt="">
    </div>

    <footer class="footer">
      <p>MIT License | Copyright (c) 2019 Ayu</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/variable.scss';
.home {
  .header {
    height: 80px;
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
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
      .nav {
        line-height: 80px;
        display: inline-block;
        display: flex;
        width: 300px;
        justify-content: space-between;
        list-style: none;
        a {
          text-decoration: none;
          color: $color-primary;
        }
      }
    }
  }
  .desc {
    margin: 0 auto;
    width: 1140px;
    text-align: center;
    padding: 20px 0;
    position: relative;
    h1 {
      font-size: 34px;
      margin: 0;
      line-height: 48px;
      color: #555;
    }
    .center-img {
      width: 100%;
      margin-top: 20px;
      user-select: none;
    }
  }
  .footer {
    background-color: #f7fbfd;
    width: 100%;
    padding: 40px 150px;
    box-sizing: border-box;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>

