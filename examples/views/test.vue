<template>
  <div>
    <ayu-pagination bgc="#11c26d" total="500" :curpage.sync="currentPage" showTotal showJumper></ayu-pagination>
    <ayu-button @click="aa">daa</ayu-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox2: [2],
      currentPage: 3
    }
  },
  methods: {
    aa() {
      this.currentPage = 10;
    }
  }
}
</script>

