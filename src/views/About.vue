<template>
  <div class="aa">
    <!-- <h1>This is an about page</h1> -->
    <!-- <p>样式：小</p>
    <ayu-pageination @size-change="handleSizePage" :show-total="false" :page-size.sync="pageSize" @current-change="handleCurrentChange" @next-click="handNextClick" @prev-click="handPrevClick" prev-text="" next-text="" :total="total" :curpage.sync="curpage" bgc="" pagination-size ="pagination-sm"></ayu-pageination>
    <p>样式：中(默认)</p>
    <ayu-pageination @size-change="handleSizePage" :show-total="false" :page-size.sync="pageSize" @current-change="handleCurrentChange" @next-click="handNextClick" @prev-click="handPrevClick" prev-text="" next-text="" :total="total" :curpage.sync="curpage" bgc="" pagination-size =""></ayu-pageination>
    <p>样式：大</p>
    <ayu-pageination @size-change="handleSizePage" :show-jumper="true" :show-total="false" :page-size.sync="pageSize" @current-change="handleCurrentChange" @next-click="handNextClick" @prev-click="handPrevClick" prev-text="" next-text="" :total="total" :curpage.sync="curpage" bgc="" pagination-size ="pagination-lg"></ayu-pageination> -->
    <p>自定义颜色</p>
    <ayu-pageination 
      @size-change="handleSizePage" 
      :show-jumper="true" 
      :show-total="true" 
      :page-size.sync="pageSize" 
      @current-change="handleCurrentChange" 
      @next-click="handNextClick"
      @prev-click="handPrevClick"
      prev-text="" next-text="" 
      :total="total" 
      :curpage.sync="curpage" 
      bgc="red" pagination-size ="pagination-lg">
    </ayu-pageination>
    <!-- <p>禁止点击</p>
    <ayu-pageination @size-change="handleSizePage" :disabled="true" :show-total="false" :page-size.sync="pageSize" @current-change="handleCurrentChange" @next-click="handNextClick" @prev-click="handPrevClick" prev-text="" next-text="" :total="total" :curpage.sync="curpage" bgc="" pagination-size ="pagination-sm"></ayu-pageination> -->
    <button @click="change" style="margin-top: 30px;">一页显示15条表格数据</button>
    <button @click="change2">一页显示10条表格数据</button>
    <button @click="change3">当前页为第2页</button>
    <button @click="change4">总数变为100</button>
  </div>
</template>
<script>
import Pageination from '@/components/Pagination';
export default {
  components: {
    'ayu-pageination': Pageination
  },
  data() {
    return {
      total: 500,
      curpage: 1,
      pageSize: 10
    };
  },
   methods: {
    handPrevClick(val) {
      console.log('点击上一页')
    },
    handNextClick(val) {
      console.log('点击下一页')
    },
    handleCurrentChange(val) {
      console.log(val)
    },
    change() {
      this.pageSize = 20
    },
    change2() {
      this.pageSize = 10
    },
    change3() {
      this.curpage = 2
    },
    change4() {
      this.total = 100;
    },
    handleSizePage(val) {
      console.log(val)
    }
  },
}
</script>
<style scoped>
.aa {
  margin: 0 auto;
  width: 900px;

}
</style>

