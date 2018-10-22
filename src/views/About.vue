<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <ayu-pageination @size-change="handleSizePage" show-total="true" :page-size.sync="pageSize" @current-change="handleCurrentChange" @next-click="handNextClick" @prev-click="handPrevClick" prev-text="" next-text="" :total="total" :curpage.sync="curpage" bgc="" pagination-size ="pagination-lg"></ayu-pageination>
    <button @click="change">adadads</button>
    <button @click="change2">222</button>
    <button @click="change3">333</button>
    <button @click="change4">444</button>
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
      console.log(val)
    },
    handNextClick(val) {
      console.log(val)
    },
    handleCurrentChange(val) {
      console.log(val)
    },
    change() {
      this.pageSize = 600
    },
    change2() {
      this.pageSize = 50
    },
    change3() {
      this.curpage = 2
    },
    change4() {
      this.pageSize = -1;
    },
    handleSizePage(val) {
      console.log(val)
    }
  },
}
</script>

