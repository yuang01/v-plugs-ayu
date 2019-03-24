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
<p>基础按钮</p>
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
    <ayu-button type="danger" disabled>danger</ayu-button>
  </div>
</template>
<script>
  import ayuIcon from "@/components/Icon";
  import ayuButton from "@/components/Button";
  import ayuCarousel from "@/components/Carousel";
  import ayuCarouselItem from "@/components/Carousel/item";
  import Floatinput from "@/components/FloatInput";
  import Pageination from "@/components/Pagination";
  import ayuSelect from "@/components/Select";
  import ayuOption from "@/components/Select/option";
  export default {
    components: {
      "ayu-pageination": Pageination,
      "ayu-floatinput": Floatinput,
      ayuSelect,
      ayuOption,
      ayuCarousel,
      ayuCarouselItem,
      ayuButton,
      ayuIcon
    },
    data() {
      return {
        num: 5,
        cardata: [
          {src: 'https://images.pexels.com/photos/2014693/pexels-photo-2014693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          {src: 'https://images.pexels.com/photos/1122400/pexels-photo-1122400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          {src: 'https://images.pexels.com/photos/1199967/pexels-photo-1199967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
          {src: 'https://images.pexels.com/photos/1615018/pexels-photo-1615018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
        ],
        total: 500,
        curpage: 1,
        pageSize: 10,
        inputValue: '',
        options: [{
            value: "1",
            label: "李白",
            disabled: true
          },
          {
            value: "2",
            label: "韩信",
            disabled: true
          },
          {
            value: "3",
            label: "貂蝉"
          },
          {
            value: "4",
            label: "东皇太一"
          },
          {
            value: "5",
            label: "程咬金",
            disabled: true
          }
        ],
        options2: [{
            value: "鲁班",
            label: "鲁班",
          },
          {
            value: "扁鹊",
            label: "扁鹊",
          },
          {
            value: "关羽",
            label: "关羽"
          },
          {
            value: "东皇太一",
            label: "东皇太一"
          },
          {
            value: "安其拉",
            label: "安其拉",
          }
        ],
        options3: [{
            value: "影忍之足",
            label: "影忍之足",
          },
          {
            value: "不死鸟之眼",
            label: "不死鸟之眼",
          },
          {
            value: "痛苦面具",
            label: "痛苦面具"
          },
          {
            value: "极寒风暴",
            label: "极寒风暴"
          },
          {
            value: "霸者重装",
            label: "霸者重装",
          },
          {
            value: "不祥征兆",
            label: "不祥征兆",
          }
        ],
        options4: [{
            value: "First Blood",
            label: "一血",
          },
          {
            value: "Double Kill",
            label: "双杀",
          },
          {
            value: "Trible Kill",
            label: "三杀"
          },
          {
            value: "Quadra Kill ",
            label: "四杀"
          },
          {
            value: "Penta Kill",
            label: "五杀",
          },
          {
            value: "Ace ",
            label: "团灭",
          }
        ]
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

