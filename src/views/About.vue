<template>
  <div class="aa">
    <!-- <h1>This is an about page</h1> -->
    <!-- <p>样式：小</p>
      <ayu-pageination @size-change="handleSizePage" :show-total="false" :page-size.sync="pageSize" @current-change="handleCurrentChange" @next-click="handNextClick" @prev-click="handPrevClick" prev-text="" next-text="" :total="total" :curpage.sync="curpage" bgc="" pagination-size ="pagination-sm"></ayu-pageination>
      <p>样式：中(默认)</p>
      <ayu-pageination @size-change="handleSizePage" :show-total="false" :page-size.sync="pageSize" @current-change="handleCurrentChange" @next-click="handNextClick" @prev-click="handPrevClick" prev-text="" next-text="" :total="total" :curpage.sync="curpage" bgc="" pagination-size =""></ayu-pageination>
      <p>样式：大</p>
      <ayu-pageination @size-change="handleSizePage" :show-jumper="true" :show-total="false" :page-size.sync="pageSize" @current-change="handleCurrentChange" @next-click="handNextClick" @prev-click="handPrevClick" prev-text="" next-text="" :total="total" :curpage.sync="curpage" bgc="" pagination-size ="pagination-lg"></ayu-pageination> -->
    <!-- <p>自定义颜色</p>
    <ayu-pageination @size-change="handleSizePage" :show-jumper="true" :show-total="true" :page-size.sync="pageSize" @current-change="handleCurrentChange" @next-click="handNextClick" @prev-click="handPrevClick" prev-text="" next-text="" :total="total" :curpage.sync="curpage"
      bgc="red" pagination-size="pagination-lg">
    </ayu-pageination> -->
    <!-- <p>禁止点击</p>
      <ayu-pageination @size-change="handleSizePage" :disabled="true" :show-total="false" :page-size.sync="pageSize" @current-change="handleCurrentChange" @next-click="handNextClick" @prev-click="handPrevClick" prev-text="" next-text="" :total="total" :curpage.sync="curpage" bgc="" pagination-size ="pagination-sm"></ayu-pageination> -->
    <!-- <button @click="change" style="margin-top: 30px;">一页显示15条表格数据</button>
    <button @click="change2">一页显示10条表格数据</button>
    <button @click="change3">当前页为第2页</button>
    <button @click="change4">总数变为100</button> -->
    <!-- <ayu-floatinput v-model="inputValue" placeholder="标题" color="red"></ayu-floatinput>
    {{inputValue}}
    <div style="display:flex;">
      <div style="width:200px;height: 100px;margin-top:15px;margin-right:10px;">
        <p style="margin-bottom:10px">禁用状态</p>
        <ayu-select v-model="inputValue" placeholder="请您禁用英雄" disabled>
          <ayu-option
            v-for="item in options" 
            :key="item.value" 
            :label="item.label" 
            :value="item.value">
            {{ item.label }}
          </ayu-option>
        </ayu-select>
      </div>
      <div style="width:200px;height: 100px;margin-top:15px;margin-right:10px;">
        <p style="margin-bottom:10px">有禁用选项</p>
        <ayu-select v-model="inputValue" placeholder="已禁的英雄">
          <ayu-option 
            v-for="item in options" 
            :key="item.value" 
            :label="item.label" 
            :value="item.value"
            :disabled="item.disabled">
            {{ item.label }}
          </ayu-option>
        </ayu-select>
      </div>
      <div style="width:200px;height: 100px;margin-top:15px;margin-right:10px;">
        <p style="margin-bottom:10px">单选</p>
        <ayu-select v-model="inputValue" placeholder="请选择您的英雄">
          <ayu-option 
            v-for="item in options2" 
            :key="item.value" 
            :label="item.label" 
            :value="item.value">
            {{ item.label }}
          </ayu-option>
        </ayu-select>
      </div>
      <div style="width:200px;height: 100px;margin-top:15px;margin-right:10px;">
        <p style="margin-bottom:10px">基础多选</p>
        <ayu-select v-model="inputValue" placeholder="请购买装备" multiple>
          <ayu-option 
            v-for="item in options3" 
            :key="item.value" 
            :label="item.label" 
            :value="item.value">
            {{ item.label }}
          </ayu-option>
        </ayu-select>
      </div>
      <div style="width:200px;height: 100px;margin-top:15px;margin-right:10px;">
        <p style="margin-bottom:10px">多选省略显示</p>
        <ayu-select v-model="inputValue" placeholder="击杀人头数" multiple collapse-tags>
          <ayu-option
            v-for="item in options4" 
            :key="item.value" 
            :label="item.label" 
            :value="item.value">
            {{ item.label }}
          </ayu-option>
        </ayu-select>
      </div>
    </div> -->
    <ayu-carousel height="300px" @change="changeCarousel" type="fade" :interval="5000">
      <ayu-carousel-item v-for="(item, index) in cardata" :key="index">
        <img :src="item.src" alt="" style="width:100%;height:100%">
      </ayu-carousel-item>
    </ayu-carousel>
    <button @click="num = 3">to 3</button> <button @click="num = 8">to 8</button>
  </div>
</template>
<script>
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
      ayuCarouselItem
    },
    data() {
      return {
        num: 5,
        cardata: [
          {src: 'https://yuang01.github.io/carousel/images/pic1.jpg'},
          {src: 'https://yuang01.github.io/carousel/images/pic2.jpg'},
          {src: 'https://yuang01.github.io/carousel/images/pic3.jpg'},
          {src: 'https://yuang01.github.io/carousel/images/pic4.jpg'}
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
      changeCarousel(val, oldVal) {
        console.log(val, oldVal);
      },
      handPrevClick(val) {
        console.log("点击上一页");
      },
      handNextClick(val) {
        console.log("点击下一页");
      },
      handleCurrentChange(val) {
        console.log(val);
      },
      change() {
        this.pageSize = 20;
      },
      change2() {
        this.pageSize = 10;
      },
      change3() {
        this.curpage = 2;
      },
      change4() {
        this.total = 100;
      },
      handleSizePage(val) {
        console.log(val);
      }
    }
  };
</script>

<style scoped>
  .aa {
    margin: 0 auto;
    width: 900px;
  }
</style>

