<template>
  <div class="home">
    <div class="home--panel">
      <div class="home--describe">
      </div>
      <img src="../assets/ayu.png" alt="" class="logo">
      <div class="home--btns">
        <router-link to='/button'>
          <span>开始使用</span>
        </router-link>
        <a href='https://github.com/yuang01/v-plugs-ayu' target="_blank">
          GitHub
        </a>
      </div>
    </div>
    <div class="hone-footer">
      MIT License | Copyright (c) 2019 ayu
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .home--panel {
    width: 400px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -100%, 0);
    text-align: center;
    .logo {
      width: 400px;
      height: 200px;
      path {
        fill: #174a6e;
      }
    }
    .home--describe {
      p {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
  .home--btns {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    a {
      font-size: 20px;
      color: #666666;
      text-decoration: none;
      transition: color 0.3s, border-color 0.3s;
      border: 1px solid #88888888;
      padding: 6px;
      border-radius: 500px;
      display: inline-block;
      width: 140px;
      box-sizing: border-box;
      &:hover {
        color: #3e8ef7;
        border-color: #3e8ef7;
      }
    }
  }
  .hone-footer {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>