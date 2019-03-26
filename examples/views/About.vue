<template>
  <div class="aa">
    <!-- <ayu-carousel height="300px" arrow="always" type="slide">
      <ayu-carousel-item v-for="(item, index) in cardata" :key="index">
        <img :src="item.src" alt="" style="width:100%;">
      </ayu-carousel-item>
    </ayu-carousel>

    <button @click="addImgFn()">增加图片</button> <button @click="reduceImgFn()">减少图片</button>

    <ayu-carousel height="300px" type="fade">
      <ayu-carousel-item v-for="(item, index) in cardata" :key="index">
        <img :src="item.src" alt="" style="width:100%;">
      </ayu-carousel-item>
    </ayu-carousel> -->
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-loading"></use>
    </svg> -->
<!-- <p>基础按钮</p>
    <ayuButton>haha</ayuButton>
    <ayu-button size="large">大型按钮</ayu-button>
    <ayu-button size="medium">中型按钮</ayu-button>
    <ayu-button size="small">小型按钮</ayu-button>
    <ayu-button size="mini">超小按钮</ayu-button>
<p>圆角按钮</p>
    <ayu-button size="large" round>大型按钮</ayu-button>
    <ayu-button size="medium" round>中型按钮</ayu-button>
    <ayu-button size="small" round>小型按钮</ayu-button>
    <ayu-button size="mini" round>超小按钮</ayu-button>
<p>不同类型</p>
    <ayu-button type="primary">primary</ayu-button>
    <ayu-button type="success">success</ayu-button>
    <ayu-button type="info">info</ayu-button>
    <ayu-button type="warning">warning</ayu-button>
    <ayu-button type="danger">danger</ayu-button>
<p>圆形状态</p>
    <ayu-button circle><ayu-icon iconClass="search"></ayu-icon></ayu-button>
    <ayu-button type="primary" circle><ayu-icon iconClass="edit"></ayu-icon></ayu-button>
    <ayu-button type="success" circle><ayu-icon iconClass="check"></ayu-icon></ayu-button>
    <ayu-button type="info" circle><ayu-icon iconClass="message"></ayu-icon></ayu-button>
    <ayu-button type="warning" circle><ayu-icon iconClass="star-off"></ayu-icon></ayu-button>
    <ayu-button type="danger" circle><ayu-icon iconClass="delete"></ayu-icon></ayu-button>
<p>加载按钮</p>
    <ayu-button loading type="primary">加载按钮</ayu-button>
<p>朴素风格</p>
    <ayu-button outline type="primary">加载按钮</ayu-button>
    <ayu-button outline type="success">加载按钮</ayu-button>
    <ayu-button outline type="info">加载按钮</ayu-button>
    <ayu-button outline type="warning">加载按钮</ayu-button>
    <ayu-button outline type="danger">加载按钮</ayu-button>
<p>禁用状态</p>
    <ayu-button type="primary" disabled>primary</ayu-button>
    <ayu-button type="success" disabled>success</ayu-button>
    <ayu-button type="info" disabled>info</ayu-button>
    <ayu-button type="warning" disabled>warning</ayu-button>
    <ayu-button type="danger" disabled>danger</ayu-button> -->
    <!-- <ayu-messagebox></ayu-messagebox> -->
    <ayu-button @click="showmessageBox()" type="info">点我</ayu-button>
    <h2>{{msg}}</h2>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data() {
      return {
        msg: ''
      };
    },
    methods: {
      addImgFn() {
        this.cardata.push(
          { src: 'https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          { src: 'https://images.pexels.com/photos/1520145/pexels-photo-1520145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          { src: 'https://images.pexels.com/photos/5946/books-yellow-book-reading.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
        );
      },
      reduceImgFn() {
        this.cardata.splice(0, 3);
      },
      showmessageBox() {
        this.$confirm({
          title: '我是标题',
          content: '我是内容',
          onConfirm: () => {
            this.msg = '你点了确定';
          },
          onCancel: () => {
            this.msg = '取消了哦';
          },
          onClose: () => {
            this.msg = '关闭了呢';
          }
        })
      }
    }
  };
</script>

<style scoped>
  .aa {
    margin: 0 auto;
    width: 600px;
  }
  .ayu-button {
    margin-right: 10px;
  }
</style>

